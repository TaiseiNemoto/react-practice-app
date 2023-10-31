import Scoreboard from '@/components/updating-objects-in-state/Scoreboard';
import H1Element from '../../../components/common/H1Element';
export default function page() {
  return (
    <main>
      <H1Element title="Fix incorrect state updates" />
      <Scoreboard />
    </main>
  );
}
