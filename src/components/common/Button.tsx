type ButttonProps = {
  buttonText: string;
  handleClick: () => void;
};

export default function Button({ buttonText, handleClick }: ButttonProps) {
  return (
    <button
      onClick={handleClick}
      className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
    >
      {buttonText}
    </button>
  );
}
