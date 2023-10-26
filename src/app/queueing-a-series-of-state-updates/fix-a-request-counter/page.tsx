import H1Element from '@/components/common/H1Element';
import RequestTracker from '@/components/queueing-a-series-of-state-updates/RequestTracker';

export default function page() {
  return (
    <main>
      <H1Element title="Fix a request counter" />
      <RequestTracker />
    </main>
  );
}
