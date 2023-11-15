import H1Element from '@/components/common/H1Element';
import SyncedInputs from '@/components/sharing-state-between-components/synced-inputs/SyncedInputs';

export default function page() {
  return (
    <main>
      <H1Element title="Synced inputs" />
      <SyncedInputs />
    </main>
  );
}
