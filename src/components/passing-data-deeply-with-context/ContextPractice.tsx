'use client';

import { useState } from 'react';
import List from './List';
import { ImageSizeContext } from '@/app/passing-data-deeply-with-context/replace-prop-drilling-with-context/Context';

export type Place = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};

export default function ContextPractice() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use LargeImages
        </label>
        <hr />
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}
