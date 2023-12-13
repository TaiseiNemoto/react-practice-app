import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Lifecycle of Reactive Effects" />
      <PageLink
        pageName="Fix reconnecting on every keystroke"
        link="/lifecycle-of-reactive-effects/fix-reconnecting-on-every-keystroke"
      />
      <PageLink
        pageName="Switch synchronization on and off"
        link="/lifecycle-of-reactive-effects/switch-synchronization-on-and-off"
      />
      <PageLink
        pageName="Populate a chain of select boxes"
        link="/lifecycle-of-reactive-effects/populate-a-chain-of-select-boxes"
      />
    </main>
  );
}
