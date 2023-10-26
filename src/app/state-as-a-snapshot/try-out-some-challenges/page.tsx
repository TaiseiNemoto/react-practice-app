import H1Element from '@/components/common/H1Element';
import TrafficLight from '@/components/state-as-a-snapshot/TrafficLight';

export default function page() {
  return (
    <main>
      <H1Element title="Try out some challengese" />
      <TrafficLight />
    </main>
  );
}
