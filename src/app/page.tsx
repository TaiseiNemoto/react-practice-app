import H1Element from '@/components/common/H1Element';
import PageLink from '@/components/common/PageLink';

export default function Home() {
  return (
    <main>
      <H1Element title="Top Page" />
      <PageLink link="/tic-tac-toe" pageName="Tic Tac Toe" />
      <PageLink
        link="/state-a-components-memory"
        pageName="State: A Component's Memory"
      />
      <PageLink link="/state-as-a-snapshot" pageName="State as a Snapshot" />
      <PageLink
        link="/queueing-a-series-of-state-updates"
        pageName="Queueing a Series of State Updates"
      />
      <PageLink
        link="/updating-objects-in-state"
        pageName="Updating Objects in State"
      />
      <PageLink
        link="/updating-arrays-in-state"
        pageName="Updating Arrays in State"
      />
      <PageLink
        link="/reacting-to-input-with-state"
        pageName="Reacting to Input with State"
      />
      <PageLink
        link="/choosing-the-state-structure"
        pageName="Choosing the State Structure"
      />
      <PageLink
        link="/sharing-state-between-components"
        pageName="Sharing State Between Components"
      />
      <PageLink
        link="/preserving-and-resetting-state"
        pageName="Preserving and Resetting State"
      />
      <PageLink
        link="/extracting-state-logic-into-a-reducer"
        pageName="Extracting State Logic into a Reducer"
      />
    </main>
  );
}
