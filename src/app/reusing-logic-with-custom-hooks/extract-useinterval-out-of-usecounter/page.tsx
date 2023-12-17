import H1Element from '@/components/common/H1Element';
import Counter from '@/components/reusing-logic-with-custom-hooks/extract-useinterval-out-of-usecounter/Counter';

export default function page() {
  return (
    <main>
      <H1Element title="Extract useInterval out of useCounter" />
      <Counter />
    </main>
  );
}
