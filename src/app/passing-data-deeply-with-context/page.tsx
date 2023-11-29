import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Passing Data Deeply with Context" />
      <PageLink
        pageName="Replace prop drilling with context"
        link="/passing-data-deeply-with-context/replace-prop-drilling-with-context"
      />
    </main>
  );
}
