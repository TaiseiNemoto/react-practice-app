import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="State: A Component's Memory" />
      <PageLink
        link="/state-a-components-memory/complete-the-gallery"
        pageName="Complete the gallery"
      />
    </main>
  );
}
