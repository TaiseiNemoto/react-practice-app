import H1Element from '@/components/common/H1Element';
import Swapfields from '@/components/preserving-and-resetting-state/swap-two-form-fields/SwapFields';

export default function page() {
  return (
    <main>
      <H1Element title="Swap two form field" />
      <Swapfields />
    </main>
  );
}
