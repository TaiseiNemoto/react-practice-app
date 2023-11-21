'use client';

import Button from '@/components/common/Button';
import { useState } from 'react';
import { Contact } from './ContactManager';

type EditContactProps = {
  initialData: Contact;
  onSave: (arg: Contact) => void;
};

export default function EditContact({ initialData, onSave }: EditContactProps) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <Button
        handleClick={() => {
          const updatedData = {
            id: initialData.id,
            name,
            email,
          };
          onSave(updatedData);
        }}
        buttonText="Save"
      />
      <Button
        handleClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
        buttonText="Reset"
      />
    </section>
  );
}
