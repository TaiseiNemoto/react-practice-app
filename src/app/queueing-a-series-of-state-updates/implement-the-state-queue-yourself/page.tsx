import H1Element from '@/components/common/H1Element';
import StateImplement from '@/components/queueing-a-series-of-state-updates/StateImplement';

export default function page() {
  return (
    <main>
      <H1Element title="Implement the state queue yourself" />
      <StateImplement />
    </main>
  );
}
