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
      <PageLink
        pageName="Reset a detail form"
        link="/preserving-and-resetting-state/reset-a-detail-form"
      />
      <PageLink
        pageName="Clear an image while it’s loading"
        link="/preserving-and-resetting-state/clear-an-image-while-its-loading"
      />
    </main>
  );
}
