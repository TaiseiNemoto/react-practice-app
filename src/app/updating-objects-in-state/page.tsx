import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Updating Objects in State" />
      <PageLink
        pageName="Fix incorrect state updates"
        link="/updating-objects-in-state/fix-incorrect-state-updates"
      />
      <PageLink
        pageName="Find and fix the mutation"
        link="/updating-objects-in-state/find-and-fix-the-mutation"
      />
    </main>
  );
}
