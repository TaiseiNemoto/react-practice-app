import H1Element from '@/components/common/H1Element';
import Counter from '@/components/reusing-logic-with-custom-hooks/extract-a-usecounter-hook/Counter';

export default function page() {
  return (
    <main>
      <H1Element title="Extract a useCounter Hook" />
      <Counter />
    </main>
  );
}
