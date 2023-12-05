import Button from '@/components/common/Button';

export default function SearchButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return <Button buttonText="Search" handleClick={handleClick} />;
}
