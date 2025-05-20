'use client'

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  Gamepad2,
  Skull,
  Timer,
  Zap,
  Trophy,
  Star,
  RotateCcw,
  HelpCircle,
  X,
} from 'lucide-react';
import { BonePart, Card, GameLevel, GameStatus } from '@/types/cari-tulang';
import { boneParts } from '@/constants/cari-tulang';

const BoneMatcherGame: React.FC = () => {
  // Data tulang manusia


  // Level permainan
  const gameLevels: GameLevel[] = [
    {
      level: 1,
      pairsCount: 4,
      timeLimit: 60,
      description: "Level pemula dengan 4 pasang tulang"
    },
    {
      level: 2,
      pairsCount: 6,
      timeLimit: 90,
      description: "Level menengah dengan 6 pasang tulang"
    },
    {
      level: 3,
      pairsCount: 8,
      timeLimit: 120,
      description: "Level ahli dengan 8 pasang tulang"
    },
    {
      level: 4,
      pairsCount: 12,
      timeLimit: 180,
      description: "Level master dengan 12 pasang tulang. Tantangan terberat!"
    }
  ];

  // State permainan
  const [selectedLevel, setSelectedLevel] = useState<GameLevel>(gameLevels[0]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('idle');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(gameLevels[0].timeLimit);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [showBonePart, setShowBonePart] = useState<BonePart | null>(null);

  // Efek untuk timer
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameStatus === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setGameStatus('timeOver');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStatus]);

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    const [firstId, secondId] = flippedCards;
    const firstCard = cards.find(card => card.id === firstId);
    const secondCard = cards.find(card => card.id === secondId);

    if (!firstCard || !secondCard) return;

    const isMatch = firstCard.bonePartId === secondCard.bonePartId && firstCard.type !== secondCard.type;

    if (isMatch) {
      // Kartu cocok
      setCards(prevCards =>
        prevCards.map(card =>
          flippedCards.includes(card.id) ? { ...card, isMatched: true } : card
        )
      );
      setMatchedPairs(prev => prev + 1);
      setFlippedCards([]);
      setStreak(prev => prev + 1);
      setScore(prev => prev + 10 * streak);

      const matchedBonePart = boneParts.find(part => part.id === firstCard.bonePartId);
      if (matchedBonePart) {
        setShowBonePart(matchedBonePart);
        setGameStatus('paused');
      }
    } else {
      // Kartu tidak cocok
      setTimeout(() => {
        setCards(prevCards =>
          prevCards.map(card =>
            flippedCards.includes(card.id) && !card.isMatched
              ? { ...card, isFlipped: false }
              : card
          )
        );
        setFlippedCards([]);
        setStreak(0);
      }, 1000);
    }

    setMoves(prev => prev + 1);
  }, [flippedCards]); // hanya bergantung pada flippedCards

  // Mengecek kondisi menang
  useEffect(() => {
    if (gameStatus === 'playing' && matchedPairs === selectedLevel.pairsCount) {
      setGameStatus('completed');
      const newScore = score + (timeLeft * 5);
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      setModalContent({
        title: "Selamat! 🎉",
        content: (
          <div className="text-center">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Level Selesai!</h3>
              <p className="text-gray-600">Kamu berhasil menyelesaikan level ini!</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Waktu tersisa</p>
                <p className="text-xl font-bold text-teal-700">{timeLeft} detik</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Langkah</p>
                <p className="text-xl font-bold text-teal-700">{moves}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Skor</p>
                <p className="text-xl font-bold text-teal-700">{score}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Rekor tertinggi</p>
                <p className="text-xl font-bold text-teal-700">{highScore}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  initializeGame(selectedLevel);
                }}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                Main Lagi
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setGameStatus('idle');
                }}
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                Pilih Level
              </button>
            </div>
          </div>
        )
      });
      setShowModal(true);
    }
  }, [matchedPairs, selectedLevel.pairsCount, gameStatus, score, highScore, moves, timeLeft]);

  // Menangani waktu habis
  useEffect(() => {
    if (gameStatus === 'timeOver') {
      setModalContent({
        title: "Waktu Habis! ⏰",
        content: (
          <div className="text-center">
            <div className="mb-6">
              <Timer className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-2">Waktu Habis!</h3>
              <p className="text-gray-600">Jangan menyerah, coba lagi!</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Pasangan ditemukan</p>
                <p className="text-xl font-bold text-red-700">{matchedPairs} / {selectedLevel.pairsCount}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Langkah</p>
                <p className="text-xl font-bold text-red-700">{moves}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  initializeGame(selectedLevel);
                }}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Coba Lagi
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setGameStatus('idle');
                }}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Pilih Level
              </button>
            </div>
          </div>
        )
      });
      setShowModal(true);
    }
  }, [gameStatus, matchedPairs, selectedLevel.pairsCount, moves]);

  // Menginisialisasi permainan berdasarkan level
  const initializeGame = (level: GameLevel) => {
    // Memilih tulang secara acak sesuai jumlah pasangan
    const shuffledBones = [...boneParts]
      .sort(() => 0.5 - Math.random())
      .slice(0, level.pairsCount);

    let newCards: Card[] = [];

    // Membuat pasangan kartu (nama dan gambar) untuk setiap tulang
    shuffledBones.forEach((bone, index) => {
      // Kartu nama
      newCards.push({
        id: index * 2 + 1,
        bonePartId: bone.id,
        type: 'name',
        content: bone.name,
        isFlipped: false,
        isMatched: false
      });

      // Kartu gambar
      newCards.push({
        id: index * 2 + 2,
        bonePartId: bone.id,
        type: 'image',
        content: bone.image,
        isFlipped: false,
        isMatched: false
      });
    });

    // Mengacak posisi kartu
    newCards = newCards.sort(() => 0.5 - Math.random());

    // Mengatur state permainan
    setCards(newCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setTimeLeft(level.timeLimit);
    setGameStatus('playing');
    setScore(0);
    setStreak(0);
  };

  // Menangani klik pada kartu
  const handleCardClick = (id: number) => {
    if (gameStatus !== 'playing') return;
    if (flippedCards.length >= 2) return;

    const clickedCard = cards.find(card => card.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    setCards(cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    ));

    setFlippedCards(prev => [...prev, id]);
  };

  // Menangani pause game
  const handlePauseGame = () => {
    if (gameStatus === 'playing') {
      setGameStatus('paused');
      setModalContent({
        title: "Permainan Dijeda",
        content: (
          <div className="text-center">
            <div className="mb-6">
              <p className="text-gray-600">Klik Lanjutkan untuk melanjutkan permainan</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setGameStatus('playing');
                }}
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                Lanjutkan
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setGameStatus('idle');
                }}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Keluar
              </button>
            </div>
          </div>
        )
      });
      setShowModal(true);
    }
  };

  // Menampilkan tutorial
  const showGameTutorial = () => {
    setShowTutorial(true);
  };

  // Format waktu
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Render halaman berdasarkan status permainan
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-green-100">
        <div className="container mx-auto max-w-6xl px-4 py-3 pt-14">
          <div className="flex items-center text-sm text-gray-600">
            <a href="#" className="hover:text-teal-700 transition-colors flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Kembali ke Beranda
            </a>
            <span className="mx-2">/</span>
            <span className="text-teal-700 font-medium">Game Tulang</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-10 h-10 text-teal-600 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-center">Bone Matcher Game</h1>
          </div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Uji pengetahuanmu tentang sistem gerak manusia dengan mencocokkan nama dan gambar dari berbagai tulang dalam tubuh manusia. Selamat bermain!
          </p>
        </div>
      </header>

      {/* Game Container */}
      <main className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          {gameStatus === 'idle' ? (
            // Pilih Level
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Pilih Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameLevels.map((level) => (
                  <div
                    key={level.level}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedLevel.level === level.level
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
                      }`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-teal-700">{level.level}</span>
                      </div>
                      <h3 className="text-lg font-semibold">Level {level.level}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{level.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center mr-1">
                          <span className="text-xs text-teal-700">⋈</span>
                        </div>
                        <span>{level.pairsCount} pasang</span>
                      </div>
                      <div className="flex items-center">
                        <Timer className="w-4 h-4 mr-1" />
                        <span>{level.timeLimit} detik</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => initializeGame(selectedLevel)}
                  className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors shadow-md flex items-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Mulai Game
                </button>

                <button
                  onClick={showGameTutorial}
                  className="ml-4 px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-teal-700 rounded-lg transition-colors shadow-sm flex items-center"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Cara Bermain
                </button>
              </div>

              {highScore > 0 && (
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center">
                  <Trophy className="w-8 h-8 text-amber-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-700">Skor Tertinggi</h3>
                    <p className="text-amber-800">{highScore} poin</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Game Play
            <div>
              {/* Game Stats */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center bg-teal-50 p-3 rounded-lg">
                    <span className="text-xs text-teal-700 uppercase font-semibold mb-1">Level</span>
                    <span className="font-bold text-xl text-teal-800">{selectedLevel.level}</span>
                  </div>

                  <div className="flex flex-col items-center bg-emerald-50 p-3 rounded-lg">
                    <span className="text-xs text-emerald-700 uppercase font-semibold mb-1">Waktu</span>
                    <span className={`font-bold text-xl ${timeLeft < 10 ? 'text-red-600' : 'text-emerald-800'}`}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>

                  <div className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
                    <span className="text-xs text-blue-700 uppercase font-semibold mb-1">Cocok</span>
                    <span className="font-bold text-xl text-blue-800">
                      {matchedPairs} / {selectedLevel.pairsCount}
                    </span>
                  </div>

                  <div className="flex flex-col items-center bg-purple-50 p-3 rounded-lg">
                    <span className="text-xs text-purple-700 uppercase font-semibold mb-1">Langkah</span>
                    <span className="font-bold text-xl text-purple-800">{moves}</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center text-amber-700">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-medium">{score}</span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        if (window.confirm("Yakin ingin mengulang permainan?")) {
                          initializeGame(selectedLevel);
                        }
                      }}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      title="Mulai Ulang"
                    >
                      <RotateCcw className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                      onClick={handlePauseGame}
                      className="p-2 bg-teal-100 hover:bg-teal-200 rounded-md transition-colors"
                      title="Jeda"
                    >
                      <Timer className="w-5 h-5 text-teal-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Game Board */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-${Math.min(6, selectedLevel.pairsCount)} gap-4`}>
                  {cards.map(card => (
                    <div
                      key={card.id}
                      className={`
                        aspect-square rounded-lg overflow-hidden cursor-pointer transition-all transform
                        ${card.isFlipped || card.isMatched ? '' : 'shadow-md hover:shadow-lg hover:scale-105'}
                        ${card.isMatched ? 'opacity-70' : ''}
                        ${(flippedCards.length >= 2 && !card.isFlipped && !card.isMatched) ? 'pointer-events-none' : ''}
                      `}
                      onClick={() => handleCardClick(card.id)}
                    >
                      <div className={`relative w-full h-full transition-transform duration-500 ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}>
                        {/* Back of card (when not flipped) */}
                        <div className={`absolute w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center ${card.isFlipped || card.isMatched ? 'hidden' : ''}`}>
                          <Skull className="w-10 h-10 text-white opacity-30" />
                        </div>

                        {/* Front of card (when flipped) */}
                        <div className={`absolute w-full h-full bg-teal-200 p-2 flex items-center justify-center ${card.isFlipped || card.isMatched ? '' : 'hidden'}`}>
                          {card.type === 'name' ? (
                            <p className="text-center text-sm font-medium text-teal-800">{card.content}</p>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <img src={card.content} alt="Gambar tulang" className="max-w-full max-h-full object-contain" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alert Dialog for Matched Bone Part */}
              {showBonePart && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                    <h2 className="text-lg font-semibold text-teal-700 mb-2">{showBonePart.name}</h2>
                    <p className="text-gray-700 text-sm mb-3">{showBonePart.description}</p>
                    <div className="text-sm text-teal-700 mb-4">
                      <span className="font-medium">Posisi:</span> {showBonePart.position}
                    </div>
                    <button
                      onClick={() => {
                        setShowBonePart(null);
                        setGameStatus('playing');
                      }}
                      className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition"
                    >
                      Paham
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && modalContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-pop-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{modalContent.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div>{modalContent.content}</div>
          </div>
        </div>
      )}

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 animate-pop-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-teal-700 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Cara Bermain
              </h3>
              <button
                onClick={() => setShowTutorial(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                Bone Matcher adalah permainan mencocokkan kartu untuk menguji pengetahuanmu tentang tulang-tulang pada tubuh manusia.
              </p>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-700 mb-2">Aturan Permainan:</h4>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Kartu yang tersedia terdiri dari pasangan nama tulang dan gambar tulang.</li>
                  <li>Klik pada kartu untuk membaliknya dan temukan pasangannya.</li>
                  <li>Setiap kali kamu menemukan pasangan kartu yang cocok, kamu akan mendapatkan poin.</li>
                  <li>Semakin banyak pasangan yang kamu temukan berturut-turut tanpa kesalahan, semakin banyak poin yang didapat.</li>
                  <li>Permainan selesai ketika semua pasangan ditemukan atau waktu habis.</li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-700 mb-2">Tips:</h4>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Cobalah untuk mengingat posisi kartu yang sudah dibuka sebelumnya.</li>
                  <li>Perhatikan waktu yang tersisa agar dapat menyelesaikan permainan tepat waktu.</li>
                  <li>Mulailah dari level mudah untuk membiasakan diri dengan permainan ini.</li>
                </ul>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  onClick={() => setShowTutorial(false)}
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                >
                  Saya Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-teal-900 text-teal-50 py-8 mt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">BIO<span className="text-emerald-400">WEB</span></span>
              <p className="mt-2 text-teal-300 text-sm">Media Pembelajaran Sistem Gerak Manusia</p>
            </div>

            <div className="flex space-x-8">
              {['Profil', 'Materi', 'Kuis', 'Game', 'Kontak'].map((item) => (
                <a key={item} href="#" className="text-teal-200 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-teal-800 text-center text-teal-400 text-sm">
            © {new Date().getFullYear()} BIOWEB - Dikembangkan untuk Media Pembelajaran Biologi
          </div>
        </div>
      </footer>

      {/* CSS untuk flip effect dan animations */}
      <style jsx global>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes popup {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-pop-in {
          animation: popup 0.3s ease-out forwards;
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BoneMatcherGame;