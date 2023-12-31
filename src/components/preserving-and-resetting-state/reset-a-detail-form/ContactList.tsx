import { Contact } from './ContactManager';

type ContactListProp = {
  contacts: Contact[];
  selectedId: number;
  onSelect: (arg: number) => void;
};

export default function ContactList({
  contacts,
  selectedId,
  onSelect,
}: ContactListProp) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
