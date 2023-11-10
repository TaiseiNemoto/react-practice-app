import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Reacting to Input with State" />
      <PageLink
        pageName="Add and remove a CSS class"
        link="/reacting-to-input-with-state/add-and-remove-a-css-class"
      />
      <PageLink
        pageName="Profile editor"
        link="/reacting-to-input-with-state/profile-editor"
      />
    </main>
  );
}
