import H1Element from '@/components/common/H1Element';
import DelayCounter from '@/components/reusing-logic-with-custom-hooks/extract-a-usecounter-hook/make-the-counter-delay-configurable/DelayCounter';

export default function page() {
  return (
    <main>
      <H1Element title="Extract a useCounter Hook" />
      <DelayCounter />
    </main>
  );
}
