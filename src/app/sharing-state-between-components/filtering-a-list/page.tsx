import H1Element from '@/components/common/H1Element';
import FilterableList from '@/components/sharing-state-between-components/filtering-a-list/FilterableList';

export default function page() {
  return (
    <main>
      <H1Element title="Filtering a list" />
      <FilterableList />
    </main>
  );
}
