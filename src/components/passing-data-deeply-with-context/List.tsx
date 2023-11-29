import { places } from '@/app/passing-data-deeply-with-context/replace-prop-drilling-with-context/data';
import Place from './Place';

export default function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));

  return <ul>{listItems}</ul>;
}
