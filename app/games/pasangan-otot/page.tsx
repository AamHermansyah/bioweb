'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Clock, RotateCcw, Home, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

// Type definitions
type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface GameState {
  score: number;
  timeLeft: number;
  level: DifficultyLevel;
  isPlaying: boolean;
  isGameOver: boolean;
}

interface MuscleItem {
  id: string;
  name: string;
  function: string;
  type: string;
  image: string;
}

interface MatchPair {
  id: string;
  muscleId: string;
  functionId: string;
  isMatched: boolean;
}

const MuscleMatchingGame: React.FC = () => {
  // Game state
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: 120, // 2 minutes in seconds
    level: 'easy',
    isPlaying: false,
    isGameOver: false
  });

  // Timer ref for cleanup
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Muscle Matching Game State
  const [muscles, setMuscles] = useState<MuscleItem[]>([]);
  const [muscleFunctions, setMuscleFunctions] = useState<{ id: string, text: string }[]>([]);
  const [matchPairs, setMatchPairs] = useState<MatchPair[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ muscleId: string, functionId: string }[]>([]);

  // Game instructions state
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Dummy data for muscle matching game
  const muscleDummyData: MuscleItem[] = [
    { id: 'biceps', name: 'Otot Bisep', function: 'Membengkokkan lengan pada siku', type: 'Otot Rangka', image: '/images/biceps.png' },
    { id: 'triceps', name: 'Otot Trisep', function: 'Meluruskan lengan pada siku', type: 'Otot Rangka', image: '/images/triceps.png' },
    { id: 'quadriceps', name: 'Otot Quadrisep', function: 'Meluruskan kaki pada lutut dan membengkokkan paha pada pinggul', type: 'Otot Rangka', image: '/images/quadriceps.png' },
    { id: 'cardiac', name: 'Otot Jantung', function: 'Memompa darah ke seluruh tubuh', type: 'Otot Jantung', image: '/images/cardiac.png' },
    { id: 'smooth', name: 'Otot Polos', function: 'Mengontrol gerakan tidak sadar pada organ dalam', type: 'Otot Polos', image: '/images/smooth.png' },
    { id: 'abdominal', name: 'Otot Perut', function: 'Membengkokkan tubuh dan melindungi organ dalam', type: 'Otot Rangka', image: '/images/abdominal.png' },
  ];

  // Initialize game
  useEffect(() => {
    initializeMuscleGame();
  }, [gameState.level]);

  // Initialize muscle matching game
  const initializeMuscleGame = () => {
    let gameMuscles: MuscleItem[] = [];
    let functions: { id: string, text: string }[] = [];
    const pairs: MatchPair[] = [];

    // Select muscles based on difficulty
    if (gameState.level === 'easy') {
      gameMuscles = [...muscleDummyData.slice(0, 3)];
    } else if (gameState.level === 'medium') {
      gameMuscles = [...muscleDummyData.slice(0, 4)];
    } else {
      gameMuscles = [...muscleDummyData];
    }

    // Create function cards
    gameMuscles.forEach(muscle => {
      functions.push({ id: `function-${muscle.id}`, text: muscle.function });
    });

    // Shuffle functions
    functions = shuffleArray(functions);

    // Create match pairs
    gameMuscles.forEach(muscle => {
      const functionItem = functions.find(f => f.text === muscle.function);
      if (functionItem) {
        pairs.push({
          id: `pair-${muscle.id}`,
          muscleId: muscle.id,
          functionId: functionItem.id,
          isMatched: false
        });
      }
    });

    setMuscles(gameMuscles);
    setMuscleFunctions(functions);
    setMatchPairs(pairs);
    setMatches([]);
  };

  // Start game
  const startGame = () => {
    setGameState({
      ...gameState,
      score: 0,
      timeLeft: gameState.level === 'easy' ? 120 : gameState.level === 'medium' ? 90 : 60,
      isPlaying: true,
      isGameOver: false
    });

    setShowInstructions(false);

    // Start timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setGameState(prevState => {
        if (prevState.timeLeft <= 1) {
          // Game over when time runs out
          if (timerRef.current) clearInterval(timerRef.current);
          return { ...prevState, timeLeft: 0, isPlaying: false, isGameOver: true };
        }
        return { ...prevState, timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  };

  // Reset game
  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setGameState({
      ...gameState,
      score: 0,
      timeLeft: gameState.level === 'easy' ? 120 : gameState.level === 'medium' ? 90 : 60,
      isPlaying: false,
      isGameOver: false
    });

    initializeMuscleGame();
    setShowInstructions(true);
  };

  // Change game level
  const changeLevel = (level: DifficultyLevel) => {
    setGameState({
      ...gameState,
      level,
      isPlaying: false,
      isGameOver: false
    });

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Check if all matches are correct
  useEffect(() => {
    if (gameState.isPlaying) {
      const allMatched = matchPairs.every(pair => {
        return matches.some(match =>
          match.muscleId === pair.muscleId &&
          match.functionId === pair.functionId
        );
      });

      if (allMatched && matches.length === matchPairs.length) {
        handleGameComplete();
      }
    }
  }, [matches, matchPairs, gameState.isPlaying]);

  // Handle when game is completed
  const handleGameComplete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Calculate score based on time left and level
    const timeBonus = gameState.timeLeft * (
      gameState.level === 'easy' ? 1 :
        gameState.level === 'medium' ? 2 : 3
    );

    const levelBonus =
      gameState.level === 'easy' ? 100 :
        gameState.level === 'medium' ? 200 : 300;

    const newScore = gameState.score + timeBonus + levelBonus;

    setGameState(prevState => ({
      ...prevState,
      score: newScore,
      isPlaying: false,
      isGameOver: true
    }));
  };

  // Muscle Matching Game Logic

  // Handle muscle selection
  const handleMuscleClick = (muscleId: string) => {
    if (!gameState.isPlaying) return;

    // If already matched, do nothing
    if (matches.some(m => m.muscleId === muscleId)) return;

    setSelectedMuscle(muscleId);

    // If function already selected, check for match
    if (selectedFunction) {
      checkForMatch(muscleId, selectedFunction);
    }
  };

  // Handle function selection
  const handleFunctionClick = (functionId: string) => {
    if (!gameState.isPlaying) return;

    // If already matched, do nothing
    if (matches.some(m => m.functionId === functionId)) return;

    setSelectedFunction(functionId);

    // If muscle already selected, check for match
    if (selectedMuscle) {
      checkForMatch(selectedMuscle, functionId);
    }
  };

  // Check if selected muscle and function match
  const checkForMatch = (muscleId: string, functionId: string) => {
    const muscle = muscles.find(m => m.id === muscleId);
    const functionItem = muscleFunctions.find(f => f.id === functionId);

    if (muscle && functionItem) {
      const matchPair = matchPairs.find(p => p.muscleId === muscleId);

      if (matchPair && matchPair.functionId === functionId) {
        // Correct match
        setMatches([...matches, { muscleId, functionId }]);
        setGameState(prevState => ({
          ...prevState,
          score: prevState.score + 20
        }));
      } else {
        // Incorrect match - penalty
        setGameState(prevState => ({
          ...prevState,
          score: Math.max(0, prevState.score - 5)
        }));
      }
    }

    // Reset selections after checking
    setSelectedMuscle(null);
    setSelectedFunction(null);
  };

  // Helper function to shuffle an array
  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // Format time to mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 py-28">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Game Header */}
          <div className="bg-gradient-to-r from-teal-600 to-green-500 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Mencocokkan Otot</h1>
            <p className="text-center text-teal-50 mt-2">
              Uji pengetahuan Anda tentang otot dan fungsinya dalam sistem gerak manusia
            </p>
          </div>

          {/* Game Controls */}
          <div className="bg-white p-4 border-b border-green-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-teal-50 px-3 py-1.5 rounded-full">
                <Trophy className="w-5 h-5 text-teal-600 mr-2" />
                <span className="font-medium text-teal-700">{gameState.score} Poin</span>
              </div>

              <div className="flex items-center bg-amber-50 px-3 py-1.5 rounded-full">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                <span className={`font-medium ${gameState.timeLeft < 30 ? 'text-red-600' : 'text-amber-700'}`}>
                  {formatTime(gameState.timeLeft)}
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-1">Level:</span>
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => !gameState.isPlaying && changeLevel(level as DifficultyLevel)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${gameState.level === level
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } ${gameState.isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={gameState.isPlaying}
                  >
                    {level === 'easy' ? 'Mudah' : level === 'medium' ? 'Sedang' : 'Sulit'}
                  </button>
                ))}
              </div>

              {!gameState.isPlaying ? (
                <button
                  onClick={startGame}
                  className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors"
                >
                  {gameState.isGameOver ? 'Main Lagi' : 'Mulai'}
                </button>
              ) : (
                <button
                  onClick={resetGame}
                  className="px-4 py-1.5 flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Game Content */}
          <div className="bg-white rounded-b-xl shadow-sm overflow-hidden p-6 min-h-[500px]">
            {/* Instructions or Game Over Screen */}
            {(!gameState.isPlaying || gameState.isGameOver) && (
              <div className="text-center py-6 max-w-2xl mx-auto">
                {showInstructions && !gameState.isGameOver ? (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Petunjuk Permainan</h3>
                    <div>
                      <p className="mb-4 text-gray-700">
                        Cocokkan setiap jenis otot dengan fungsinya yang benar. Pilih otot, kemudian pilih fungsi yang sesuai untuk mencocokkannya.
                      </p>
                      <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">1</span>
                          <span>Klik pada otot, kemudian klik pada fungsi yang sesuai</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">2</span>
                          <span>Setiap pasangan yang benar mendapatkan 20 poin</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">3</span>
                          <span>Pencocokan yang salah akan mengurangi 5 poin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : gameState.isGameOver ? (
                  <div>
                    <h3 className="text-xl font-bold mb-2">Permainan Selesai!</h3>
                    {matches.length === matchPairs.length ? (
                      <p className="text-green-600 flex items-center justify-center mb-4">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Selamat! Anda telah menyelesaikan permainan.
                      </p>
                    ) : (
                      <p className="text-amber-600 flex items-center justify-center mb-4">
                        <XCircle className="w-5 h-5 mr-2" />
                        Waktu habis! Coba lagi.
                      </p>
                    )}

                    <div className="flex justify-center items-center space-x-2 mb-8">
                      <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-teal-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-gray-600">Skor Akhir</p>
                        <p className="text-3xl font-bold text-teal-700">{gameState.score}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8">
                      Level: {gameState.level === 'easy' ? 'Mudah' : gameState.level === 'medium' ? 'Sedang' : 'Sulit'}
                    </p>

                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={resetGame}
                        className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg flex items-center transition-colors"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Main Lagi
                      </button>
                      <Link
                        href="/"
                        className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg flex items-center transition-colors"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Kembali ke Beranda
                      </Link>
                    </div>
                  </div>
                ) : null}

                {showInstructions && !gameState.isGameOver && (
                  <button
                    onClick={startGame}
                    className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg inline-flex items-center transition-colors"
                  >
                    Mulai Permainan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            )}

            {/* Active Game Content */}
            {gameState.isPlaying && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Cocokkan Otot dan Fungsinya</h3>
                  <p className="text-gray-600">Pilih satu otot dan satu deskripsi fungsi untuk mencocokkannya.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Muscles column */}
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-medium mb-4">Jenis Otot</h4>
                    <div className="space-y-3">
                      {muscles.map(muscle => {
                        const isMatched = matches.some(m => m.muscleId === muscle.id);
                        const isSelected = selectedMuscle === muscle.id;

                        return (
                          <div
                            key={muscle.id}
                            onClick={() => handleMuscleClick(muscle.id)}
                            className={`p-4 rounded-lg cursor-pointer border transition-all ${isMatched
                              ? 'bg-green-50 border-green-300'
                              : isSelected
                                ? 'bg-teal-50 border-teal-400'
                                : 'bg-white border-gray-200 hover:border-teal-300'
                              }`}
                          >
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-teal-700 font-medium">{muscle.name.charAt(0)}</span>
                              </div>
                              <div>
                                <h5 className="font-medium">{muscle.name}</h5>
                                <p className="text-sm text-gray-500">{muscle.type}</p>
                              </div>
                              {isMatched && (
                                <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Functions column */}
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-medium mb-4">Fungsi Otot</h4>
                    <div className="space-y-3">
                      {muscleFunctions.map(func => {
                        const isMatched = matches.some(m => m.functionId === func.id);
                        const isSelected = selectedFunction === func.id;

                        return (
                          <div
                            key={func.id}
                            onClick={() => handleFunctionClick(func.id)}
                            className={`p-4 rounded-lg cursor-pointer border transition-all ${isMatched
                              ? 'bg-green-50 border-green-300'
                              : isSelected
                                ? 'bg-amber-50 border-amber-400'
                                : 'bg-white border-gray-200 hover:border-amber-300'
                              }`}
                          >
                            <p className="font-medium">{func.text}</p>
                            {isMatched && (
                              <CheckCircle className="w-5 h-5 text-green-600 mt-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscleMatchingGame;