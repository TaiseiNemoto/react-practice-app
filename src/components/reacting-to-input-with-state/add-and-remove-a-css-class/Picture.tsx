'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <div className="background background--active">
      <Image
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        width={399}
        height={372}
        onClick={handleOnClick}
      />
    </div>
  );
}
