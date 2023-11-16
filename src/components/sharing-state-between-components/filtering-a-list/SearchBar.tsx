type SearchBarProps = {
  query: string;
  handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ query, handleChange }: SearchBarProps) {
  return (
    <label>
      Search: <input type="text" value={query} onChange={handleChange} />
    </label>
  );
}
