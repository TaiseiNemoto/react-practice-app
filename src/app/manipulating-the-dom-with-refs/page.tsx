import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="" />
      <PageLink
        pageName="Manipulating the DOM with Refs"
        link="/manipulating-the-dom-with-refs/play-and-pause-the-video"
      />
    </main>
  );
}
