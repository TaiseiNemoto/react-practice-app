import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Reusing Logic with Custom Hookss" />
      <PageLink
        link="/reusing-logic-with-custom-hooks/extract-a-usecounter-hook"
        pageName="Extract a useCounter Hook"
      />
      <PageLink
        link="/reusing-logic-with-custom-hooks/make-the-counter-delay-configurable"
        pageName="Make the counter delay configurable"
      />
      <PageLink
        link="/reusing-logic-with-custom-hooks/extract-useinterval-out-of-usecounter"
        pageName="Extract useInterval out of useCounter"
      />
      <PageLink
        link="/reusing-logic-with-custom-hooks/implement-a-staggering-movement"
        pageName="Implement a staggering movement"
      />
    </main>
  );
}
