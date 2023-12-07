import H1Element from '@/components/common/H1Element';
import Bio from '@/components/synchronizing-with-effects/fix-fetching-inside-an-effect/Bio';

export default function page() {
  return (
    <main>
      <H1Element title="Fix fetching inside an Effect" />
      <Bio />
    </main>
  );
}
