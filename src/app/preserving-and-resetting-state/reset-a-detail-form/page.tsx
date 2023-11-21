import H1Element from '@/components/common/H1Element';
import ContactManager from '@/components/preserving-and-resetting-state/reset-a-detail-form/ContactManager';

export default function page() {
  return (
    <main>
      <H1Element title="Reset a detail form" />
      <ContactManager />
    </main>
  );
}
