'use client';

import { createConnection } from '@/app/lifecycle-of-reactive-effects/fix-reconnecting-on-every-keystroke/Chat';
import { useEffect, useState } from 'react';

const serverUrl = 'https://localhost:1234';

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}
