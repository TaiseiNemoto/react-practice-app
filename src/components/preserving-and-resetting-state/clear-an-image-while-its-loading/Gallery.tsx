'use client';

import { images } from '@/app/preserving-and-resetting-state/clear-an-image-while-its-loading/images';
import { useState } from 'react';
import Button from '../../common/Button';
import Image from 'next/image';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) setIndex(index + 1);
    else setIndex(0);
  }

  const image = images[index];

  return (
    <>
      <Button buttonText="Next" handleClick={handleClick} />
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <Image
        key={image.place}
        src={image.src}
        width={300}
        height={300}
        alt={image.place}
      />
      <p>{image.place}</p>
    </>
  );
}
