'use client';

import { useState } from 'react';
import Button from '../common/Button';
import { sculptureList } from '@/app/state-a-components-memory/complete-the-gallery/data';
import Image from 'next/image';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;

  const sculpture = sculptureList[index];
  return (
    <>
      {hasPrev && <Button handleClick={handlePrevClick} buttonText="Prev" />}
      {hasNext && <Button handleClick={handleNextClick} buttonText="Next" />}
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <Button
        handleClick={handleMoreClick}
        buttonText={`${showMore ? 'Hide' : 'Show'} details`}
      />
      {showMore && <p>{sculpture.description}</p>}
      <Image src={sculpture.url} alt={sculpture.alt} width={212} height={212} />
    </>
  );
}
