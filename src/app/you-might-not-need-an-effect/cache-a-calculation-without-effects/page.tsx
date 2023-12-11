import TodoList from '@/components/you-might-not-need-an-effect/cache-a-calculation-without-effects/TodoList';
import H1Element from '../../../components/common/H1Element';

export default function page() {
  return (
    <main>
      <H1Element title="Cache a calculation without Effects" />
      <TodoList />
    </main>
  );
}
