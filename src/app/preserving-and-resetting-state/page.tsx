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
      <PageLink
        pageName="Swap two form field"
        link="/preserving-and-resetting-state/swap-two-form-fields"
      />
      {/* <PageLink
        pageName="Implement multiple selection"
        link="/preserving-and-resetting-state/implement-multiple-selection"
      /> */}
    </main>
  );
}
