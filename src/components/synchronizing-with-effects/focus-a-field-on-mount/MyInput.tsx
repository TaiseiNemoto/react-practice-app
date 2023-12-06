import { useEffect, useRef } from 'react';

type MyInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MyInput({ value, onChange }: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input type="text" ref={ref} value={value} onChange={onChange} />;
}
