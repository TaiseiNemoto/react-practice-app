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
      <PageLink
        pageName="Fix the disappearing selection"
        link="/choosing-the-state-structure/fix-the-disappearing-selection"
      />
      <PageLink
        pageName="Implement multiple selection"
        link="/choosing-the-state-structure/implement-multiple-selection"
      />
    </main>
  );
}
