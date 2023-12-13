import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Separating Events from Effects" />
      <PageLink
        link="/separating-events-from-effects/fix-a-variable-that-doesnt-update"
        pageName="Fix a variable that doesn’t update"
      />
      {/* <PageLink
        link="/separating-events-from-effects/fix-debouncing"
        pageName="Fix debouncing"
      /> */}
      {/* <PageLink
        link="/separating-events-from-effects/read-the-latest-state"
        pageName="Read the latest state"
      /> */}
    </main>
  );
}
