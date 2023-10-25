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
      <PageLink
        link="/state-a-components-memory/fix-stuck-form-inputs"
        pageName="Fix stuck form inputs"
      />
      <PageLink
        link="/state-a-components-memory/fix-a-crash"
        pageName="Fix a crash"
      />
    </main>
  );
}
