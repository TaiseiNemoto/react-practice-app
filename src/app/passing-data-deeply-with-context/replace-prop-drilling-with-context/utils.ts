import { Place } from '@/components/passing-data-deeply-with-context/ContextPractice';

export function getImageUrl(place: Place) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
}
