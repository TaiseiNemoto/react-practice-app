'use client';

import { useState } from 'react';
import Button from '../../common/Button';

type ContactProps = {
  contact: {
    id: number;
    name: string;
    email: string;
  };
};

export default function Contact({ contact }: ContactProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <Button
        buttonText={`${expanded ? 'Hide' : 'Show'} email`}
        handleClick={() => {
          setExpanded(!expanded);
        }}
      />
    </>
  );
}
