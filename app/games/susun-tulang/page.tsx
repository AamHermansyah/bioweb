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

interface BoneItem {
  id: string;
  name: string;
  description: string;
  position: number;
  image: string;
}

const BoneArrangementGame: React.FC = () => {
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

  // Bone Arrangement Game State
  const [bones, setBones] = useState<BoneItem[]>([]);
  const [arrangementComplete, setArrangementComplete] = useState<boolean>(false);
  const [, setDraggedBone] = useState<BoneItem | null>(null);
  const [dropTargets, setDropTargets] = useState<{ id: string, position: number, isFilled: boolean }[]>([]);

  // Game instructions state
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Dummy data for bone arrangement game
  const boneDummyData: BoneItem[] = [
    { id: 'skull', name: 'Tengkorak', description: 'Melindungi otak dan membentuk struktur wajah', position: 1, image: '/images/skull.png' },
    { id: 'spine', name: 'Tulang Belakang', description: 'Mendukung kepala dan badan, melindungi sumsum tulang belakang', position: 2, image: '/images/spine.png' },
    { id: 'ribs', name: 'Tulang Rusuk', description: 'Melindungi organ-organ vital seperti jantung dan paru-paru', position: 3, image: '/images/ribs.png' },
    { id: 'pelvis', name: 'Tulang Panggul', description: 'Mendukung organ dalam dan menghubungkan tulang kaki dengan tulang belakang', position: 4, image: '/images/pelvis.png' },
    { id: 'femur', name: 'Tulang Paha', description: 'Tulang terpanjang dan terkuat dalam tubuh manusia', position: 5, image: '/images/femur.png' },
    { id: 'tibia', name: 'Tulang Kering', description: 'Mendukung berat tubuh dan memungkinkan gerakan kaki bawah', position: 6, image: '/images/tibia.png' },
  ];

  // Initialize game
  useEffect(() => {
    initializeBoneGame();
  }, [gameState.level]);

  // Initialize bone arrangement game
  const initializeBoneGame = () => {
    let gameBones: BoneItem[] = [];
    const targets: { id: string, position: number, isFilled: boolean }[] = [];

    // Select bones based on difficulty
    if (gameState.level === 'easy') {
      gameBones = [...boneDummyData.slice(0, 4)];
    } else if (gameState.level === 'medium') {
      gameBones = [...boneDummyData.slice(0, 5)];
    } else {
      gameBones = [...boneDummyData];
    }

    // Shuffle bones
    gameBones = shuffleArray(gameBones);

    // Create drop targets
    gameBones.forEach((bone, idx) => {
      targets.push({ id: `target-${idx}`, position: bone.position, isFilled: false });
    });

    setBones(gameBones);
    setDropTargets(targets);
    setArrangementComplete(false);
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

    initializeBoneGame();
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

  // Check if all targets are filled correctly in bone game
  useEffect(() => {
    if (gameState.isPlaying) {
      const allCorrect = dropTargets.every(target => {
        const filledBone = bones.find(bone => bone.position === target.position);
        return filledBone && target.isFilled;
      });

      if (allCorrect && dropTargets.length > 0 && dropTargets.every(t => t.isFilled)) {
        handleGameComplete();
        setArrangementComplete(true);
      }
    }
  }, [dropTargets, bones, gameState.isPlaying]);

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

  // Bone Arrangement Game Logic

  // Handle bone drag start
  const handleBoneDragStart = (bone: BoneItem, e: React.DragEvent<HTMLDivElement>) => {
    setDraggedBone(bone);
    e.dataTransfer.setData('text/plain', bone.id);
    e.currentTarget.style.opacity = '0.4';
  };

  // Handle bone drag end
  const handleBoneDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = '1';
    setDraggedBone(null);
  };

  // Handle bone drag over
  const handleBoneDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-green-100');
  };

  // Handle bone drag leave
  const handleBoneDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('bg-green-100');
  };

  // Handle bone drop
  const handleBoneDrop = (targetId: string, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-green-100');

    const boneId = e.dataTransfer.getData('text/plain');
    const bone = bones.find(b => b.id === boneId);
    const targetIndex = dropTargets.findIndex(t => t.id === targetId);

    if (bone && targetIndex !== -1) {
      // Update drop targets
      const updatedTargets = [...dropTargets];
      updatedTargets[targetIndex] = {
        ...updatedTargets[targetIndex],
        isFilled: true
      };

      setDropTargets(updatedTargets);

      // Check if bone is placed in correct position
      const isCorrect = bone.position === updatedTargets[targetIndex].position;

      // Update score
      if (isCorrect) {
        setGameState(prevState => ({
          ...prevState,
          score: prevState.score + 10
        }));
      }
    }
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
            <h1 className="text-2xl md:text-3xl font-bold text-center">Susunan Tulang</h1>
            <p className="text-center text-teal-50 mt-2">
              Uji pengetahuan Anda tentang susunan tulang pada kerangka manusia
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
                        Seret dan letakkan tulang ke posisi yang benar pada kerangka manusia. Semakin cepat Anda menyelesaikannya, semakin tinggi skor yang akan Anda dapatkan.
                      </p>
                      <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">1</span>
                          <span>Seret tulang dari baki ke target yang sesuai</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">2</span>
                          <span>Setiap penempatan yang benar mendapatkan 10 poin</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-2">3</span>
                          <span>Selesaikan sebelum waktu habis untuk bonus skor</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : gameState.isGameOver ? (
                  <div>
                    <h3 className="text-xl font-bold mb-2">Permainan Selesai!</h3>
                    {arrangementComplete ? (
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
                  <h3 className="text-xl font-semibold mb-3">Susun Kerangka Manusia</h3>
                  <p className="text-gray-600">Seret tulang dari baki ke posisi yang benar pada kerangka.</p>
                </div>

                {/* Game skeleton placeholder */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Bone container (source) */}
                  <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-medium mb-4">Tulang</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {bones.map(bone => (
                        <div
                          key={bone.id}
                          draggable
                          onDragStart={(e) => handleBoneDragStart(bone, e)}
                          onDragEnd={handleBoneDragEnd}
                          className="bg-white p-3 rounded-lg shadow-sm cursor-grab border border-gray-200 hover:border-teal-400 transition-colors"
                        >
                          <div className="aspect-square bg-teal-50 rounded-md mb-2 flex items-center justify-center">
                            {/* Placeholder for bone image */}
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                              <span className="text-teal-700 font-medium">{bone.name.charAt(0)}</span>
                            </div>
                          </div>
                          <p className="text-sm font-medium">{bone.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skeleton target area */}
                  <div className="md:w-2/3 bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center">
                    <h4 className="text-lg font-medium mb-4">Kerangka</h4>

                    {/* Human skeleton outline - simplified for this example */}
                    <div className="w-full max-w-sm h-96 bg-white rounded-lg p-4 relative mx-auto">
                      {/* Placeholder for skeleton outline */}
                      <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <p>Kerangka Manusia</p>
                          <p className="text-xs">Susun tulang pada posisi yang benar</p>
                        </div>
                      </div>

                      {/* Drop zones */}
                      <div className="absolute inset-0 p-4">
                        <div className="relative w-full h-full">
                          {dropTargets.map((target, index) => (
                            <div
                              key={target.id}
                              onDragOver={handleBoneDragOver}
                              onDragLeave={handleBoneDragLeave}
                              onDrop={(e) => handleBoneDrop(target.id, e)}
                              className={`absolute w-24 h-24 rounded-lg border-2 border-dashed transition-colors ${target.isFilled ? 'bg-green-50 border-green-400' : 'border-blue-300'
                                }`}
                              style={{
                                top: `${(index * 20) + 5}%`,
                                left: `${index % 2 === 0 ? 30 : 60}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            >
                              {target.isFilled && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="bg-green-100 px-2 py-1 rounded text-xs text-green-700">
                                    {bones.find(b => b.position === target.position)?.name || ''}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
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

export default BoneArrangementGame;