import Game from '@/components/tic-tac-toe/Game';
import Link from 'next/link';

export default function page() {
  return (
    <main>
      <h1>tic-tac-toe</h1>
      <Link href="/">To top</Link>
      <Game />
    </main>
  );
}
