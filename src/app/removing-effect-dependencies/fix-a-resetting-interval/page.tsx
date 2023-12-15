import H1Element from '@/components/common/H1Element';
import Timer from '@/components/removing-effect-dependencies/fix-a-resetting-interval/Timer';

export default function page() {
  return (
    <main>
      <H1Element title="Fix a resetting interval" />
      <Timer />
    </main>
  );
}
