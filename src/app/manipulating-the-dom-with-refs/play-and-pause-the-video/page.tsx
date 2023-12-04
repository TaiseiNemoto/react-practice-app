import H1Element from '@/components/common/H1Element';
import VideoPlayer from '@/components/manipulating-the-dom-with-refs/play-and-pause-the-video/VideoPlayer';

export default function page() {
  return (
    <main>
      <H1Element title="Play and pause the video" />
      <VideoPlayer />
    </main>
  );
}
