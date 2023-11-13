import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Choosing the State Structure" />
      <PageLink
        pageName="Fix a broken packing list"
        link="/choosing-the-state-structure/fix-a-broken-packing-list"
      />
      {/* <PageLink
        pageName="Find and fix the mutation"
        link="/updating-objects-in-state/find-and-fix-the-mutation"
      /> */}
    </main>
  );
}
