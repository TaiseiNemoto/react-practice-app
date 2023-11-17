import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Preserving and Resetting State" />
      <PageLink
        pageName="Fix disappearing input text"
        link="/preserving-and-resetting-state/fix-disappearing-input-text"
      />
      {/* <PageLink
        pageName="Fix the disappearing selection"
        link="/preserving-and-resetting-state/fix-the-disappearing-selection"
      /> */}
      {/* <PageLink
        pageName="Implement multiple selection"
        link="/preserving-and-resetting-state/implement-multiple-selection"
      /> */}
    </main>
  );
}
