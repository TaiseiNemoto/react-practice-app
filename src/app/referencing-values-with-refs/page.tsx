import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Referencing Values with Refs" />
      <PageLink
        link="/referencing-values-with-refs/fix-a-broken-chat-input"
        pageName="Fix a broken chat input"
      />
      <PageLink
        link="/referencing-values-with-refs/fix-debouncing"
        pageName="Fix debouncing"
      />
      <PageLink
        link="/referencing-values-with-refs/read-the-latest-state"
        pageName="Read the latest state"
      />
    </main>
  );
}
