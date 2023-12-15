import H1Element from '@/components/common/H1Element';
import ChatForm from '@/components/removing-effect-dependencies/fix-a-reconnecting-chat/ChatForm';

export default function page() {
  return (
    <main>
      <H1Element title="Fix a reconnecting chat" />
      <ChatForm />
    </main>
  );
}
