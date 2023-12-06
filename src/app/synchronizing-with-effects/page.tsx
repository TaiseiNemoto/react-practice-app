import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function Home() {
  return (
    <main>
      <H1Element title="Synchronizing with Effectst" />
      <PageLink
        link="/synchronizing-with-effects/focus-a-field-on-mount"
        pageName="Focus a field on mount"
      />
      <PageLink
        link="/synchronizing-with-effects/fix-an-interval-that-fires-twice"
        pageName="Fix an interval that fires twice"
      />
    </main>
  );
}
