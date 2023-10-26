import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function Home() {
  return (
    <main>
      <H1Element title="State as a Snapshot" />
      <PageLink
        link="/state-as-a-snapshot/try-out-some-challenges"
        pageName="Try out some challengese"
      />
    </main>
  );
}
