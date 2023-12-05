import H1Element from '@/components/common/H1Element';
import Search from '@/components/manipulating-the-dom-with-refs/focus-the-search-field-with-separate-components/Search';

export default function page() {
  return (
    <main>
      <H1Element title="Focus the search field with separate components" />
      <Search />
    </main>
  );
}
