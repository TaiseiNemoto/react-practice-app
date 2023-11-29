import type { Place } from './ContextPractice';
import PlaceImage from './PlaceImage';

type PlaceProps = {
  place: Place;
};

export default function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}
