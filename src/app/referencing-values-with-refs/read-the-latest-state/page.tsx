import H1Element from '@/components/common/H1Element';
import Chat from '@/components/referencing-values-with-refs/read-the-latest-state/Chat';

export default function page() {
  return (
    <main>
      <H1Element title="Read the latest state" />
      <Chat />
    </main>
  );
}
