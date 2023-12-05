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
      <PageLink
        pageName="Focus the search field"
        link="/manipulating-the-dom-with-refs/focus-the-search-field"
      />
      <PageLink
        pageName="Scrolling an image carousel"
        link="/manipulating-the-dom-with-refs/scrolling-an-image-carousel"
      />
      <PageLink
        pageName="Focus the search field with separate components"
        link="/manipulating-the-dom-with-refs/focus-the-search-field-with-separate-components"
      />
    </main>
  );
}
