'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  const backgroundClassName = isActive
    ? 'background background--active'
    : 'background';
  const pictureClassName = isActive ? 'picture picture--active' : 'picture';

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <Image
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        width={399}
        height={372}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
}
