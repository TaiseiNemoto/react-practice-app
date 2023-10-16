'use client';

type SquareType = {
  value: 'X' | 'O' | null;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareType) {
  return (
    <button
      className="border-2 text-2xl w-9 h-9 mt-[-2px] mr-[-2px] font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
