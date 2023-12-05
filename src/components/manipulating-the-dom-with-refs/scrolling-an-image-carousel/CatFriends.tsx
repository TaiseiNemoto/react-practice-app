'use client';

import Button from '@/components/common/Button';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef<HTMLLIElement>(null!);

  return (
    <>
      <nav className="text-center">
        <Button
          buttonText="Next"
          handleClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
        />
      </nav>
      <div className="overflow-hidden w-max">
        <ul className="whitespace-nowrap flex">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              className="whitespace-nowrap inline"
              ref={index === 1 ? selectedRef : null}
            >
              <Image
                className={
                  index === i ? 'border-solid border-2 border-indigo-600' : ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
                width={250}
                height={200}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type Cat = {
  id: number;
  imageUrl: string;
};

const catList: Cat[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
