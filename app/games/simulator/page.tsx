'use client'

import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, RefreshCwIcon, ChevronRightIcon, XIcon, CheckIcon, InfoIcon, TrophyIcon, ClockIcon } from 'lucide-react';

// Type definitions
type MovementType = 'flexion' | 'extension' | 'abduction' | 'adduction' | 'rotation';
type JointType = 'shoulder' | 'elbow' | 'wrist' | 'hip' | 'knee' | 'ankle' | 'spine';
type MuscleGroup = 'biceps' | 'triceps' | 'deltoid' | 'pectoralis' | 'quadriceps' | 'hamstrings' | 'gluteus' | 'gastrocnemius' | 'trapezius' | 'abdominals';
type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface MovementScenario {
  id: number;
  title: string;
  description: string;
  joint: JointType;
  movementType: MovementType;
  primaryMuscles: MuscleGroup[];
  antagonistMuscles: MuscleGroup[];
  difficulty: DifficultyLevel;
  imageURL: string;
  hint?: string;
}

interface GameState {
  currentScenarioIndex: number;
  score: number;
  timeLeft: number;
  lives: number;
  level: DifficultyLevel;
  isPlaying: boolean;
  isGameOver: boolean;
  answeredCorrectly: boolean[];
  showFeedback: boolean;
  feedbackType: 'correct' | 'incorrect' | null;
}

interface Answer {
  selectedMovement: MovementType | null;
  selectedMuscles: MuscleGroup[];
}

const MovementSimulatorGame: React.FC = () => {
  // Movement data
  const movementScenarios: MovementScenario[] = [
    {
      id: 1,
      title: "Mengangkat Lengan",
      description: "Gerakan lengan ke atas dari posisi samping tubuh",
      joint: "shoulder",
      movementType: "abduction",
      primaryMuscles: ["deltoid"],
      antagonistMuscles: ["pectoralis"],
      difficulty: "easy",
      imageURL: "/images/shoulder-abduction.png",
      hint: "Gerakan menjauhi sumbu tengah tubuh"
    },
    {
      id: 2,
      title: "Membengkokkan Siku",
      description: "Mengangkat lengan bawah ke arah bahu",
      joint: "elbow",
      movementType: "flexion",
      primaryMuscles: ["biceps"],
      antagonistMuscles: ["triceps"],
      difficulty: "easy",
      imageURL: "/images/elbow-flexion.png",
      hint: "Gerakan mengurangi sudut sendi"
    },
    {
      id: 3,
      title: "Menendang Ke Depan",
      description: "Menggerakkan kaki ke depan dari posisi berdiri",
      joint: "hip",
      movementType: "flexion",
      primaryMuscles: ["quadriceps"],
      antagonistMuscles: ["gluteus", "hamstrings"],
      difficulty: "medium",
      imageURL: "/images/hip-flexion.png",
      hint: "Gerakan mengurangi sudut sendi"
    },
    {
      id: 4,
      title: "Memutar Kepala",
      description: "Menggerakkan kepala ke kanan atau kiri",
      joint: "spine",
      movementType: "rotation",
      primaryMuscles: ["trapezius"],
      antagonistMuscles: [],
      difficulty: "medium",
      imageURL: "/images/neck-rotation.png",
      hint: "Gerakan memutar di sekitar sumbu"
    },
    {
      id: 5,
      title: "Menurunkan Lengan",
      description: "Gerakan menurunkan lengan dari posisi terangkat",
      joint: "shoulder",
      movementType: "adduction",
      primaryMuscles: ["pectoralis"],
      antagonistMuscles: ["deltoid"],
      difficulty: "medium",
      imageURL: "/images/shoulder-adduction.png",
      hint: "Gerakan mendekati sumbu tengah tubuh"
    },
    {
      id: 6,
      title: "Meluruskan Lutut",
      description: "Menggerakkan kaki bawah dari posisi bengkok",
      joint: "knee",
      movementType: "extension",
      primaryMuscles: ["quadriceps"],
      antagonistMuscles: ["hamstrings"],
      difficulty: "easy",
      imageURL: "/images/knee-extension.png",
      hint: "Gerakan menambah sudut sendi"
    },
    {
      id: 7,
      title: "Meluruskan Siku",
      description: "Menurunkan lengan bawah ke posisi lurus",
      joint: "elbow",
      movementType: "extension",
      primaryMuscles: ["triceps"],
      antagonistMuscles: ["biceps"],
      difficulty: "easy",
      imageURL: "/images/elbow-extension.png",
      hint: "Gerakan menambah sudut sendi"
    },
    {
      id: 8,
      title: "Mengangkat Kaki Ke Samping",
      description: "Gerakan kaki menjauhi sumbu tengah tubuh",
      joint: "hip",
      movementType: "abduction",
      primaryMuscles: ["gluteus"],
      antagonistMuscles: ["abdominals"],
      difficulty: "hard",
      imageURL: "/images/hip-abduction.png",
      hint: "Gerakan menjauhi sumbu tengah tubuh"
    },
    {
      id: 9,
      title: "Membungkukkan Tubuh",
      description: "Menundukkan tubuh bagian atas ke depan",
      joint: "spine",
      movementType: "flexion",
      primaryMuscles: ["abdominals"],
      antagonistMuscles: ["trapezius"],
      difficulty: "medium",
      imageURL: "/images/trunk-flexion.png",
      hint: "Gerakan mengurangi sudut sendi"
    },
    {
      id: 10,
      title: "Mengangkat Tumit",
      description: "Berdiri dengan ujung jari kaki",
      joint: "ankle",
      movementType: "flexion",
      primaryMuscles: ["gastrocnemius"],
      antagonistMuscles: [],
      difficulty: "hard",
      imageURL: "/images/ankle-flexion.png",
      hint: "Gerakan mengurangi sudut sendi"
    }
  ];

  // Movement types for selection
  const movementTypes: MovementType[] = ['flexion', 'extension', 'abduction', 'adduction', 'rotation'];

  // Muscle groups for selection
  const allMuscleGroups: MuscleGroup[] = [
    'biceps', 'triceps', 'deltoid', 'pectoralis',
    'quadriceps', 'hamstrings', 'gluteus', 'gastrocnemius',
    'trapezius', 'abdominals'
  ];

  // Game state
  const [gameState, setGameState] = useState<GameState>({
    currentScenarioIndex: 0,
    score: 0,
    timeLeft: 60, // 60 seconds per scenario
    lives: 3,
    level: 'easy',
    isPlaying: false,
    isGameOver: false,
    answeredCorrectly: Array(movementScenarios.length).fill(false),
    showFeedback: false,
    feedbackType: null
  });

  // Current answer state
  const [currentAnswer, setCurrentAnswer] = useState<Answer>({
    selectedMovement: null,
    selectedMuscles: []
  });

  // Timer ref for cleanup
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter scenarios based on difficulty
  const filteredScenarios = movementScenarios.filter(
    scenario => scenario.difficulty === gameState.level
  );

  // Current scenario
  const currentScenario = filteredScenarios[gameState.currentScenarioIndex];

  // Start game
  const startGame = () => {
    setGameState({
      ...gameState,
      currentScenarioIndex: 0,
      score: 0,
      timeLeft: 60,
      lives: 3,
      isPlaying: true,
      isGameOver: false,
      answeredCorrectly: Array(filteredScenarios.length).fill(false),
      showFeedback: false,
      feedbackType: null
    });

    setCurrentAnswer({
      selectedMovement: null,
      selectedMuscles: []
    });

    // Start timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setGameState(prevState => {
        if (prevState.timeLeft <= 1) {
          // Time's up for this scenario
          if (timerRef.current) clearInterval(timerRef.current);

          // If not answered, count as incorrect and reduce lives
          if (!prevState.showFeedback) {
            return handleTimeOut(prevState);
          }
          return prevState;
        }
        return { ...prevState, timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  };

  // Handle timeout
  const handleTimeOut = (prevState: GameState): GameState => {
    const newLives = prevState.lives - 1;

    if (newLives <= 0) {
      // Game over
      return {
        ...prevState,
        timeLeft: 0,
        lives: 0,
        isPlaying: false,
        isGameOver: true,
        showFeedback: true,
        feedbackType: 'incorrect'
      };
    }

    // Show timeout feedback, then move to next scenario
    setTimeout(() => {
      nextScenario();
    }, 2000);

    return {
      ...prevState,
      timeLeft: 0,
      lives: newLives,
      showFeedback: true,
      feedbackType: 'incorrect'
    };
  };

  // Select movement type
  const selectMovementType = (movement: MovementType) => {
    if (!gameState.isPlaying || gameState.showFeedback) return;

    setCurrentAnswer(prev => ({
      ...prev,
      selectedMovement: movement
    }));
  };

  // Toggle muscle selection
  const toggleMuscleSelection = (muscle: MuscleGroup) => {
    if (!gameState.isPlaying || gameState.showFeedback) return;

    setCurrentAnswer(prev => {
      const isSelected = prev.selectedMuscles.includes(muscle);

      if (isSelected) {
        return {
          ...prev,
          selectedMuscles: prev.selectedMuscles.filter(m => m !== muscle)
        };
      } else {
        return {
          ...prev,
          selectedMuscles: [...prev.selectedMuscles, muscle]
        };
      }
    });
  };

  // Submit answer
  const submitAnswer = () => {
    if (!gameState.isPlaying || gameState.showFeedback || !currentAnswer.selectedMovement) return;

    // Check if movement type is correct
    const isMovementCorrect = currentAnswer.selectedMovement === currentScenario.movementType;

    // Check if primary muscles are correctly identified
    // Simple check: at least one primary muscle must be selected, and no incorrect muscles
    const primaryMusclesSelected = currentScenario.primaryMuscles.some(muscle =>
      currentAnswer.selectedMuscles.includes(muscle)
    );

    // No antagonist muscles should be selected
    const antagonistMusclesSelected = currentScenario.antagonistMuscles.some(muscle =>
      currentAnswer.selectedMuscles.includes(muscle)
    );

    // Non-related muscles should not be selected
    const nonRelatedMusclesSelected = currentAnswer.selectedMuscles.some(muscle =>
      !currentScenario.primaryMuscles.includes(muscle) &&
      !currentScenario.antagonistMuscles.includes(muscle)
    );

    // Answer is correct if movement type is correct and muscle selection is correct
    const isCorrect = isMovementCorrect && primaryMusclesSelected &&
      !antagonistMusclesSelected && !nonRelatedMusclesSelected;

    // Update score and correct answers
    let newScore = gameState.score;
    const newAnsweredCorrectly = [...gameState.answeredCorrectly];

    if (isCorrect) {
      // Base score for correct answer
      const baseScore = 10;

      // Bonus for time left (up to double points for quick answers)
      const timeBonus = Math.round((gameState.timeLeft / 60) * 10);

      // Difficulty bonus
      const difficultyBonus =
        gameState.level === 'easy' ? 0 :
          gameState.level === 'medium' ? 5 : 10;

      // Total score for this scenario
      const scenarioScore = baseScore + timeBonus + difficultyBonus;

      newScore += scenarioScore;
      newAnsweredCorrectly[gameState.currentScenarioIndex] = true;
    } else {
      // Decrease lives for incorrect answer
      const newLives = gameState.lives - 1;

      if (newLives <= 0) {
        // Game over
        setGameState({
          ...gameState,
          lives: 0,
          isPlaying: false,
          isGameOver: true,
          showFeedback: true,
          feedbackType: 'incorrect'
        });

        if (timerRef.current) {
          clearInterval(timerRef.current);
        }

        return;
      }

      setGameState({
        ...gameState,
        lives: newLives,
        score: newScore,
        answeredCorrectly: newAnsweredCorrectly,
        showFeedback: true,
        feedbackType: isCorrect ? 'correct' : 'incorrect'
      });
    }

    // Show feedback
    setGameState({
      ...gameState,
      score: newScore,
      answeredCorrectly: newAnsweredCorrectly,
      showFeedback: true,
      feedbackType: isCorrect ? 'correct' : 'incorrect'
    });

    // Pause timer during feedback
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Automatically move to next scenario after feedback
    setTimeout(() => {
      nextScenario();
    }, 3000);
  };

  // Reset game
  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setGameState({
      currentScenarioIndex: 0,
      score: 0,
      timeLeft: 60,
      lives: 3,
      level: gameState.level,
      isPlaying: false,
      isGameOver: false,
      answeredCorrectly: Array(filteredScenarios.length).fill(false),
      showFeedback: false,
      feedbackType: null
    });

    setCurrentAnswer({
      selectedMovement: null,
      selectedMuscles: []
    });
  };

  // Change difficulty level
  const changeLevel = (level: DifficultyLevel) => {
    if (gameState.isPlaying) return;

    setGameState({
      ...gameState,
      level,
      currentScenarioIndex: 0,
      answeredCorrectly: Array(
        movementScenarios.filter(scenario => scenario.difficulty === level).length
      ).fill(false)
    });
  };

  // Move to next scenario
  const nextScenario = () => {
    if (gameState.currentScenarioIndex >= filteredScenarios.length - 1) {
      // End of game
      setGameState(prev => ({
        ...prev,
        isPlaying: false,
        isGameOver: true
      }));

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      return;
    }

    // Reset answer for next scenario
    setCurrentAnswer({
      selectedMovement: null,
      selectedMuscles: []
    });

    // Move to next scenario
    setGameState(prev => ({
      ...prev,
      currentScenarioIndex: prev.currentScenarioIndex + 1,
      timeLeft: 60,
      showFeedback: false,
      feedbackType: null
    }));

    // Restart timer for next scenario
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setGameState(prevState => {
        if (prevState.timeLeft <= 1) {
          // Time's up for this scenario
          if (timerRef.current) clearInterval(timerRef.current);

          // If not answered, count as incorrect and reduce lives
          if (!prevState.showFeedback) {
            return handleTimeOut(prevState);
          }
          return prevState;
        }
        return { ...prevState, timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Helper to translate movement types to Indonesian
  const translateMovementType = (type: MovementType): string => {
    const translations: Record<MovementType, string> = {
      'flexion': 'Fleksi (Membengkokkan)',
      'extension': 'Ekstensi (Meluruskan)',
      'abduction': 'Abduksi (Menjauhi Tubuh)',
      'adduction': 'Adduksi (Mendekati Tubuh)',
      'rotation': 'Rotasi (Memutar)'
    };

    return translations[type];
  };

  // Helper to translate muscle groups to Indonesian
  const translateMuscleGroup = (muscle: MuscleGroup): string => {
    const translations: Record<MuscleGroup, string> = {
      'biceps': 'Otot Bisep',
      'triceps': 'Otot Trisep',
      'deltoid': 'Otot Deltoid (Bahu)',
      'pectoralis': 'Otot Pektoralis (Dada)',
      'quadriceps': 'Otot Quadrisep (Paha Depan)',
      'hamstrings': 'Otot Hamstring (Paha Belakang)',
      'gluteus': 'Otot Gluteus (Bokong)',
      'gastrocnemius': 'Otot Gastrocnemius (Betis)',
      'trapezius': 'Otot Trapezius (Punggung Atas)',
      'abdominals': 'Otot Perut'
    };

    return translations[muscle];
  };

  // Format time to mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      <div className="w-full max-w-6xl mx-auto py-28">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Game Header */}
          <div className="bg-gradient-to-r from-teal-600 to-green-500 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Simulator Gerakan Tubuh</h1>
            <p className="text-center text-teal-50 mt-2">
              Identifikasi jenis gerakan dan otot yang digunakan dalam gerakan tubuh manusia
            </p>
          </div>

          {/* Game Controls */}
          {!gameState.isPlaying && !gameState.isGameOver && (
            <div className="px-6 md:px-8 py-14">
              <div className="max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-4">Atur Level Kesulitan</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['easy', 'medium', 'hard'].map((level) => (
                    <button
                      key={level}
                      onClick={() => changeLevel(level as DifficultyLevel)}
                      className={`px-4 py-2 rounded-md text-sm transition-colors ${gameState.level === level
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {level === 'easy' ? 'Mudah' : level === 'medium' ? 'Sedang' : 'Sulit'}
                    </button>
                  ))}
                </div>

                <h2 className="text-xl font-bold mb-4">Cara Bermain</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-teal-800">1</span>
                    </div>
                    <p>Identifikasi jenis gerakan yang ditunjukkan pada gambar (fleksi, ekstensi, dll)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-teal-800">2</span>
                    </div>
                    <p>Pilih otot utama yang berkontraksi saat gerakan tersebut terjadi</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-teal-800">3</span>
                    </div>
                    <p>Semakin cepat Anda menjawab, semakin tinggi skor yang didapatkan</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={startGame}
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg inline-flex items-center transition-colors"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Mulai Permainan
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Game Play Area */}
          {gameState.isPlaying && currentScenario && (
            <div className="px-6 md:px-8 py-14">
              {/* Game Stats */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-teal-50 px-3 py-1.5 rounded-full">
                    <TrophyIcon className="w-4 h-4 text-teal-600 mr-1.5" />
                    <span className="font-medium text-teal-700">{gameState.score} Poin</span>
                  </div>

                  <div className="flex items-center bg-amber-50 px-3 py-1.5 rounded-full">
                    <ClockIcon className="w-4 h-4 text-amber-600 mr-1.5" />
                    <span className={`font-medium ${gameState.timeLeft < 15 ? 'text-red-600' : 'text-amber-700'}`}>
                      {formatTime(gameState.timeLeft)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-500 mr-1">Lives:</span>
                    {Array.from({ length: gameState.lives }).map((_, index) => (
                      <span key={index} className="text-red-500">❤</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Skenario {gameState.currentScenarioIndex + 1}/{filteredScenarios.length}</span>
                  <button
                    onClick={resetGame}
                    className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Reset Game"
                  >
                    <RefreshCwIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scenario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image & Description Side */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-2">{currentScenario.title}</h2>
                  <p className="text-gray-600 mb-4">{currentScenario.description}</p>

                  {/* This would typically be an actual image, using a placeholder for now */}
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="font-medium">[Ilustrasi {currentScenario.title}]</p>
                      <p className="text-sm">Pada sendi {currentScenario.joint === 'spine' ? 'tulang belakang' : currentScenario.joint}</p>
                    </div>
                  </div>

                  {/* Hint */}
                  {currentScenario.hint && (
                    <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                      <InfoIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-700">
                        <span className="font-medium">Petunjuk:</span> {currentScenario.hint}
                      </p>
                    </div>
                  )}
                </div>

                {/* Answer Side */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  {/* Feedback Display */}
                  {gameState.showFeedback ? (
                    <div className={`p-4 rounded-lg mb-4 ${gameState.feedbackType === 'correct'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                      }`}>
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full ${gameState.feedbackType === 'correct'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                          }`}>
                          {gameState.feedbackType === 'correct'
                            ? <CheckIcon className="w-5 h-5" />
                            : <XIcon className="w-5 h-5" />}
                        </div>
                        <div className="ml-3">
                          <h3 className={`font-semibold ${gameState.feedbackType === 'correct'
                            ? 'text-green-700'
                            : 'text-red-700'
                            }`}>
                            {gameState.feedbackType === 'correct'
                              ? 'Jawaban Benar!'
                              : 'Jawaban Salah'}
                          </h3>
                          <div className="mt-2">
                            <p className="font-medium text-gray-700">Jawaban yang benar:</p>
                            <p className="text-gray-700">
                              Jenis gerakan: <span className="font-medium">{translateMovementType(currentScenario.movementType)}</span>
                            </p>
                            <p className="text-gray-700">
                              Otot utama:
                              <span className="font-medium">
                                {currentScenario.primaryMuscles.map(m => translateMuscleGroup(m)).join(', ')}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">Melanjutkan ke gerakan berikutnya...</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Movement Type Selection */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Jenis Gerakan</h3>
                        <p className="text-sm text-gray-600 mb-3">Pilih jenis gerakan yang terjadi:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {movementTypes.map(movement => (
                            <button
                              key={movement}
                              onClick={() => selectMovementType(movement)}
                              className={`p-3 rounded-lg text-left border ${currentAnswer.selectedMovement === movement
                                ? 'bg-teal-50 border-teal-400'
                                : 'bg-white border-gray-200 hover:border-teal-200'
                                }`}
                            >
                              {translateMovementType(movement)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Muscle Selection */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Otot yang Berkontraksi</h3>
                        <p className="text-sm text-gray-600 mb-3">Pilih otot utama yang berkontraksi (bisa lebih dari satu):</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {allMuscleGroups.map(muscle => (
                            <button
                              key={muscle}
                              onClick={() => toggleMuscleSelection(muscle)}
                              className={`p-3 rounded-lg text-left border ${currentAnswer.selectedMuscles.includes(muscle)
                                ? 'bg-teal-50 border-teal-400'
                                : 'bg-white border-gray-200 hover:border-teal-200'
                                }`}
                            >
                              {translateMuscleGroup(muscle)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          onClick={submitAnswer}
                          disabled={!currentAnswer.selectedMovement || currentAnswer.selectedMuscles.length === 0}
                          className={`px-6 py-3 rounded-lg font-medium ${currentAnswer.selectedMovement && currentAnswer.selectedMuscles.length > 0
                            ? 'bg-teal-600 hover:bg-teal-700 text-white'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                          Jawab
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Game Over Screen */}
          {gameState.isGameOver && (
            <div className="px-6 md:px-8 py-14 text-center">
              <h2 className="text-2xl font-bold mb-4">Permainan Selesai!</h2>

              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-12 h-12 text-teal-600" />
                </div>
                <p className="text-lg text-gray-700 mb-2">Skor Akhir</p>
                <p className="text-4xl font-bold text-teal-700">{gameState.score}</p>
              </div>

              {/* Score Breakdown */}
              <div className="max-w-md mx-auto mb-8">
                <h3 className="text-lg font-medium mb-3">Ringkasan Skenario</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    {filteredScenarios.map((scenario, index) => (
                      <div
                        key={scenario.id}
                        className={`p-3 rounded-lg flex items-center ${gameState.answeredCorrectly[index] ? 'bg-green-50' : 'bg-red-50'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${gameState.answeredCorrectly[index] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {gameState.answeredCorrectly[index] ? <CheckIcon className="w-4 h-4" /> : <XIcon className="w-4 h-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium">{index + 1}. {scenario.title}</p>
                          <p className="text-sm text-gray-600">
                            {translateMovementType(scenario.movementType)} pada {scenario.joint === 'spine' ? 'tulang belakang' : scenario.joint}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg inline-flex items-center transition-colors"
                >
                  <RefreshCwIcon className="w-5 h-5 mr-2" />
                  Main Lagi
                </button>
                <button
                  onClick={() => changeLevel(
                    gameState.level === 'easy' ? 'medium' :
                      gameState.level === 'medium' ? 'hard' : 'easy'
                  )}
                  className="px-6 py-3 bg-white border border-teal-600 text-teal-700 hover:bg-teal-50 font-medium rounded-lg inline-flex items-center transition-colors"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2" />
                  {gameState.level === 'easy' ? 'Coba Level Sedang' :
                    gameState.level === 'medium' ? 'Coba Level Sulit' : 'Coba Level Mudah'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovementSimulatorGame;