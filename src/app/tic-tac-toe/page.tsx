import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';
import Game from '@/components/tic-tac-toe/Game';
import Link from 'next/link';

export default function page() {
  return (
    <main>
      <H1Element title="Tic Tac Toe" />
      <PageLink link="/" pageName="Top" />
      <Game />
    </main>
  );
}
