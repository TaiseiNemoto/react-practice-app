import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Sharing State Between Components" />
      <PageLink
        link="/sharing-state-between-components/synced-inputs"
        pageName="Synced inputs"
      />
      <PageLink
        link="/sharing-state-between-components/filtering-a-list"
        pageName="Filtering a list"
      />
    </main>
  );
}
