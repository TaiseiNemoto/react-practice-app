import H1Element from '@/components/common/H1Element';
import CounterWrapper from '@/components/synchronizing-with-effects/fix-an-interval-that-fires-twice/CounterWrapper';

export default function page() {
  return (
    <main>
      <H1Element title="Focus a field on mount" />
      <CounterWrapper />
    </main>
  );
}
