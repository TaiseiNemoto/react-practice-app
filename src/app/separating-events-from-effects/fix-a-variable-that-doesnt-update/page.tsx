import H1Element from '@/components/common/H1Element';
import Timer from '@/components/separating-events-from-effects/fix-a-variable-that-doesnt-update/Timer';

export default function page() {
  return (
    <main>
      <H1Element title="Fix a variable that doesn’t update" />
      <Timer />
    </main>
  );
}
