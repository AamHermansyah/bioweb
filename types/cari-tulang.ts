export type BonePart = {
  id: number;
  name: string;
  description: string;
  image: string;
  position: string;
};

// Tipe data untuk kartu dalam permainan
export type Card = {
  id: number;
  bonePartId: number;
  type: 'name' | 'image';
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
};

// Tipe data untuk level permainan
export type GameLevel = {
  level: number;
  pairsCount: number;
  timeLimit: number;
  description: string;
};

// Tipe data untuk status permainan
export type GameStatus = 'idle' | 'playing' | 'paused' | 'completed' | 'timeOver';