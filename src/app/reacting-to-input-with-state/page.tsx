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
      {/* <PageLink
        pageName="Fix the mutations using non-mutative methods"
        link="/updating-arrays-in-state/fix-the-mutations-using-non-mutative-methods"
      /> */}
    </main>
  );
}
