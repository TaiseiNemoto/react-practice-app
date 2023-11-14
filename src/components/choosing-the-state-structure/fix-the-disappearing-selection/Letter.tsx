import { Letter } from './MailClient';

type LetterProps = {
  letter: Letter;
  isHighlighted: boolean;
  onHover: (arg: Letter) => void;
  onToggleStar: (arg: Letter) => void;
};

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterProps) {
  return (
    <li
      className={isHighlighted ? 'bg-emerald-50' : ''}
      onFocus={() => {
        onHover(letter);
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        className="border p-1"
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  );
}
