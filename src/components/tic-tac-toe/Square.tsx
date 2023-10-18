'use client';

type SquareProps = {
  value: 'X' | 'O' | null;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="border-2 text-2xl w-9 h-9 mt-[-2px] mr-[-2px] font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
