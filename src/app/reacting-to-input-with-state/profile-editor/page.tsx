import H1Element from '@/components/common/H1Element';
import EditProfile from '@/components/reacting-to-input-with-state/profile-editor/EditProfile';

export default function page() {
  return (
    <main>
      <H1Element title="Profile editor" />
      <EditProfile />
    </main>
  );
}
