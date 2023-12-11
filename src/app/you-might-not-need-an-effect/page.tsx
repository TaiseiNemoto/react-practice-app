import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="You Might Not Need an Effect" />
      <PageLink
        pageName="Transform data without Effects"
        link="/you-might-not-need-an-effect/transform-data-without-effects"
      />
      <PageLink
        pageName="Cache a calculation without Effects"
        link="/you-might-not-need-an-effect/cache-a-calculation-without-effects"
      />
    </main>
  );
}
