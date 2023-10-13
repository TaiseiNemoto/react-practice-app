import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>top page</h1>
      <Link href="/tic-tac-toe">To tic-tac-toe</Link>
    </main>
  );
}
