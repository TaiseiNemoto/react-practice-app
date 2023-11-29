import { getImageUrl } from '@/app/passing-data-deeply-with-context/replace-prop-drilling-with-context/utils';
import Image from 'next/image';
import { Place } from './ContextPractice';
import { useContext } from 'react';
import { ImageSizeContext } from '@/app/passing-data-deeply-with-context/replace-prop-drilling-with-context/Context';

type PlaceImageProps = {
  place: Place;
};

export default function PlaceImage({ place }: PlaceImageProps) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <Image
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
