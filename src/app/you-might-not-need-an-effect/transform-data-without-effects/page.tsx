import TodoList from '@/components/you-might-not-need-an-effect/transform-data-without-effects/TodoList';
import H1Element from '../../../components/common/H1Element';
export default function page() {
  return (
    <main>
      <H1Element title="Transform data without Effects" />
      <TodoList />
    </main>
  );
}
