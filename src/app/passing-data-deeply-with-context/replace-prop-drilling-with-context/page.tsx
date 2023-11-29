import H1Element from '@/components/common/H1Element';
import ContextPractice from '@/components/passing-data-deeply-with-context/ContextPractice';

export default function page() {
  return (
    <main>
      <H1Element title="Replace prop drilling with context" />
      <ContextPractice />
    </main>
  );
}
