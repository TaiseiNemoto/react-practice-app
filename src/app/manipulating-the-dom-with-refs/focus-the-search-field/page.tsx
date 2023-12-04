import H1Element from '@/components/common/H1Element';
import SearchField from '@/components/manipulating-the-dom-with-refs/focus-the-search-field/SearchField';

export default function page() {
  return (
    <main>
      <H1Element title="Focus the search field" />
      <SearchField />
    </main>
  );
}
