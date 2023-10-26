import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Queueing a Series of State Updates" />
      <PageLink
        pageName="Fix a request counter"
        link="/queueing-a-series-of-state-updates/fix-a-request-counter"
      />
    </main>
  );
}
