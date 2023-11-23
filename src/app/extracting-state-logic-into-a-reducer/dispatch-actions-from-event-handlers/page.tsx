import H1Element from '@/components/common/H1Element';
import Messenger from '@/components/extracting-state-logic-into-a-reducer/dispatch-actions-from-event-handlers/Messenger';

export default function page() {
  return (
    <main>
      <H1Element title="Dispatch actions from event handlers" />
      <Messenger />
    </main>
  );
}
