import { MovementScenario } from "@/types/simulator";

export const movementScenarios: MovementScenario[] = [
  {
    id: 1,
    title: "Mengangkat Lengan",
    description: "Gerakan lengan ke atas dari posisi samping tubuh",
    joint: "shoulder",
    movementType: "abduction",
    primaryMuscles: ["deltoid"],
    antagonistMuscles: ["pectoralis"],
    difficulty: "easy",
    imageURL: "/games/simulator/shoulder-abduction.png",
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
    imageURL: "/games/simulator/elbow-flexion.png",
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
    imageURL: "/games/simulator/hip-flexion.png",
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
    imageURL: "/games/simulator/neck-rotation.png",
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
    imageURL: "/games/simulator/shoulder-adduction.png",
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
    imageURL: "/games/simulator/knee-extension.png",
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
    imageURL: "/games/simulator/elbow-extension.png",
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
    imageURL: "/games/simulator/hip-abduction.png",
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
    imageURL: "/games/simulator/trunk-flexion.png",
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
    imageURL: "/games/simulator/ankle-flexion.png",
    hint: "Gerakan mengurangi sudut sendi"
  }
];