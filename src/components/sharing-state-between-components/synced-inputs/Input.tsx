'use client';

export default function Input({
  label,
  text,
  onChange,
}: {
  label: string;
  text: string;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      {label} <input type="text" value={text} onChange={onChange} />
    </label>
  );
}
