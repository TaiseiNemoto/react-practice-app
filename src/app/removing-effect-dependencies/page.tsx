import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Removing Effect Dependencies" />
      <PageLink
        link="/removing-effect-dependencies/fix-a-resetting-interval"
        pageName="Fix a resetting interval"
      />
      <PageLink
        link="/removing-effect-dependencies/fix-a-reconnecting-chat"
        pageName="Fix a reconnecting chat"
      />
    </main>
  );
}
