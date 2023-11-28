'use client';

import {
  initialState,
  messengerReducer,
} from '@/app/extracting-state-logic-into-a-reducer/dispatch-actions-from-event-handlers/messengerReducer';
import { useReducer } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';

export type Contact = {
  id: number;
  name: string;
  email: string;
};

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const messages = state.messages;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact!.id}
        message={messages[contact!.id]}
        contact={contact!}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
