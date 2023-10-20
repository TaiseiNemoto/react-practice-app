import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function Home() {
  return (
    <main>
      <H1Element title="Top Page" />
      <PageLink link="/tic-tac-toe" pageName="Tic Tac Toe" />
      <PageLink
        link="/state-a-components-memory"
        pageName="State: A Component's Memory"
      />
    </main>
  );
}
