import { useRef } from 'react';

type DebouncedButton = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function DebouncedButton({
  onClick,
  children,
}: DebouncedButton) {
  const timeoutRef = useRef<number>(null!);

  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}
