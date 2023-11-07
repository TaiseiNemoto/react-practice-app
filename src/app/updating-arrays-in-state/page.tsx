import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Updating Arrays in State" />
      <PageLink
        pageName="Fix incorrect state updates"
        link="/updating-arrays-in-state/update-an-item-in-the-shopping-cart"
      />
    </main>
  );
}
