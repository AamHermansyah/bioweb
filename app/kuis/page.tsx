'use client'

import React, { useState } from 'react';
import { BookOpen, Check, X, ChevronRight, AlertTriangle, Award, RefreshCw, Home } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import IllustrationCard from '@/components/illustration-card';
import { AnsweredQuestion, QuizQuestion } from '@/types/quiz';
import { quizQuestions } from '@/constants/quiz';
import Link from 'next/link';

const QuizPage: React.FC = () => {
  // State untuk melacak quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);

  // Menangani pemilihan jawaban
  const handleAnswerSelection = (index: number): void => {
    if (showFeedback) return; // Mencegah perubahan jawaban setelah feedback ditampilkan
    setSelectedAnswer(index);
  };

  // Menangani submit jawaban
  const handleSubmitAnswer = (): void => {
    if (selectedAnswer === null) return; // Mencegah submit tanpa pilihan jawaban

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    // Menambahkan pertanyaan ke daftar yang sudah dijawab
    setAnsweredQuestions([...answeredQuestions, {
      questionId: currentQuestion.id,
      isCorrect,
      selectedAnswer
    }]);

    setShowFeedback(true);
  };

  // Menangani perpindahan ke pertanyaan berikutnya
  const handleNextQuestion = (): void => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Menghitung persentase nilai
  const calculatePercentage = (): number => {
    return (score / quizQuestions.length) * 100;
  };

  // Memulai kuis dari awal
  const restartQuiz = (): void => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizCompleted(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];
  const scorePercentage: number = calculatePercentage();
  const isPassing: boolean = scorePercentage >= 70;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      <Breadcrumb current="Kuis" />

      {/* Header */}
      <header className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Kuis Sistem Gerak Manusia</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Uji pemahaman Anda tentang sistem gerak manusia melalui kuis interaktif ini.
            Kuis terdiri dari 10 pertanyaan pilihan ganda dengan feedback langsung.
          </p>
        </div>
      </header>

      {/* Quiz Container */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          {!quizCompleted ? (
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-green-100">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progres</span>
                  <span>{currentQuestionIndex + 1} dari {quizQuestions.length} soal</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-teal-600 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold">
                  <span className="text-teal-700 mr-2">{currentQuestionIndex + 1}.</span>
                  {currentQuestion.question}
                </h2>

                {currentQuestion.image && (
                  <div className="mt-2">
                    <IllustrationCard
                      imageUrl={currentQuestion.image}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Answer Options */}
                <div className="space-y-3 mt-4">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelection(index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${selectedAnswer === index
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
                        }`}
                      disabled={showFeedback}
                    >
                      <div className="flex items-start">
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 ${selectedAnswer === index
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                          }`}>
                          <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                        </div>
                        <span className="text-gray-800">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Section */}
              {showFeedback && (
                <div className={`mb-8 p-4 rounded-lg ${selectedAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                  }`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${selectedAnswer === currentQuestion.correctAnswer
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}>
                      {selectedAnswer === currentQuestion.correctAnswer
                        ? <Check className="w-5 h-5" />
                        : <X className="w-5 h-5" />}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-semibold ${selectedAnswer === currentQuestion.correctAnswer
                        ? 'text-green-700'
                        : 'text-red-700'
                        }`}>
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? 'Jawaban Benar!'
                          : 'Jawaban Salah'}
                      </h3>
                      <p className="text-gray-700 mt-1">{currentQuestion.explanation}</p>
                      {selectedAnswer !== currentQuestion.correctAnswer && (
                        <p className="mt-2 font-medium text-gray-700">
                          Jawaban yang benar adalah: {String.fromCharCode(65 + currentQuestion.correctAnswer)}. {currentQuestion.options[currentQuestion.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={restartQuiz}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-teal-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Mulai Ulang
                </button>

                {showFeedback ? (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? (
                      <>
                        Lanjut <ChevronRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      'Lihat Hasil'
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitAnswer}
                    className={`inline-flex items-center px-6 py-2.5 font-medium rounded-lg transition-colors ${selectedAnswer !== null
                      ? 'bg-teal-600 hover:bg-teal-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    disabled={selectedAnswer === null}
                  >
                    Periksa Jawaban
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Quiz Result
            <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Hasil Kuis Anda</h2>
                <p className="text-gray-600 text-center mb-8">
                  Anda telah menyelesaikan kuis Sistem Gerak Manusia.
                </p>

                <div className="flex justify-center mb-8">
                  <div className="w-48 h-48 relative">
                    <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-teal-700">{Math.round(scorePercentage)}%</div>
                        <div className="text-gray-600 mt-1">{score} dari {quizQuestions.length} soal</div>
                      </div>
                    </div>
                    <svg className="absolute top-0 left-0 w-48 h-48" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={isPassing ? "#10b981" : "#f59e0b"}
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * scorePercentage) / 100}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-center mb-8">
                  {isPassing ? (
                    <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="font-medium">Selamat! Anda lulus kuis.</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center bg-amber-50 text-amber-700 px-4 py-2 rounded-full">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Anda belum mencapai skor minimal 70%.</span>
                    </div>
                  )}
                </div>

                {!isPassing && (
                  <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">Rekomendasi Materi</h3>
                    <p className="text-gray-700 mb-4">
                      Berdasarkan hasil kuis Anda, kami menyarankan untuk mengulas kembali materi berikut:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <BookOpen className="w-5 h-5 text-amber-700 mt-0.5 mr-2" />
                        <span>Struktur dan Fungsi Tulang</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="w-5 h-5 text-amber-700 mt-0.5 mr-2" />
                        <span>Mekanisme Kontraksi Otot</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="w-5 h-5 text-amber-700 mt-0.5 mr-2" />
                        <span>Klasifikasi Sendi dan Pergerakannya</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Summary of answered questions */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Ringkasan Jawaban</h3>
                  <div className="space-y-3">
                    {answeredQuestions.map((answer, index) => {
                      const question = quizQuestions.find(q => q.id === answer.questionId);
                      return (
                        <div
                          key={index}
                          className={`p-3 rounded-lg flex items-center ${answer.isCorrect ? 'bg-green-50' : 'bg-red-50'
                            }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${answer.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {answer.isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 font-medium line-clamp-1">{index + 1}. {question?.question}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                  <button
                    onClick={restartQuiz}
                    className="flex items-center justify-center px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Coba Lagi
                  </button>
                  <Link
                    href="/materi"
                    className="flex items-center justify-center px-6 py-2.5 bg-white border border-teal-600 text-teal-700 hover:bg-teal-50 font-medium rounded-lg transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Kembali ke Materi
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center justify-center px-6 py-2.5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuizPage;