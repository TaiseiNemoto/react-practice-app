import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function page() {
  return (
    <main>
      <H1Element title="Extracting State Logic into a Reducer" />
      <PageLink
        pageName="Dispatch actions from event handlers"
        link="/extracting-state-logic-into-a-reducer/dispatch-actions-from-event-handlers"
      />
      {/* <PageLink
        pageName="Swap two form field"
        link="/extracting-state-logic-into-a-reducer/swap-two-form-fields"
      />
      <PageLink
        pageName="Reset a detail form"
        link="/extracting-state-logic-into-a-reducer/reset-a-detail-form"
      />
      <PageLink
        pageName="Clear an image while it’s loading"
        link="/extracting-state-logic-into-a-reducer/clear-an-image-while-its-loading"
      />
      <PageLink
        pageName="Fix misplaced state in the list"
        link="/extracting-state-logic-into-a-reducer/fix-misplaced-state-in-the-list"
      /> */}
    </main>
  );
}
