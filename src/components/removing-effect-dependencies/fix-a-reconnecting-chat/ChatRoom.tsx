import { createConnection } from '@/app/removing-effect-dependencies/fix-a-reconnecting-chat/chat';
import { useEffect } from 'react';

type ChatRoomProps = {
  options: {
    serverUrl: string;
    roomId: string;
  };
};

export default function ChatRoom({ options }: ChatRoomProps) {
  const { roomId, serverUrl } = options;

  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return <h1>Welcome to {options.roomId} room!</h1>;
}
