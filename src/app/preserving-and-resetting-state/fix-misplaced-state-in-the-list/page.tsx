import H1Element from '@/components/common/H1Element';
import ContactList from '@/components/preserving-and-resetting-state/fix-misplaced-state-in-the-list/ContactList';

export default function page() {
  return (
    <main>
      <H1Element title="Fix misplaced state in the list" />
      <ContactList />
    </main>
  );
}
