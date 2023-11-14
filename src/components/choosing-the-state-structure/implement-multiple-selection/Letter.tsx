type Letter = {
  id: number;
  subject: string;
  isStarred: boolean;
};

type LetterProps = {
  letter: Letter;
  onToggle: (arg: number) => void;
  isSelected: boolean;
};

export default function Letter({ letter, onToggle, isSelected }: LetterProps) {
  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
