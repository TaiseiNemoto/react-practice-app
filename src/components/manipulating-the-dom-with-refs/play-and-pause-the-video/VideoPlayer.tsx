'use client';

import Button from '@/components/common/Button';
import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
  }

  return (
    <>
      <Button
        handleClick={handleClick}
        buttonText={isPlaying ? 'Pause' : 'Play'}
      />
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
