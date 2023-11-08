import TaskApp from '@/components/updating-arrays-in-state/fix-the-mutations-using-non-mutative-methods/TaskApp';
import H1Element from '../../../components/common/H1Element';

export default function page() {
  return (
    <main>
      <H1Element title="Fix the mutations using non-mutative methods" />
      <TaskApp />
    </main>
  );
}
