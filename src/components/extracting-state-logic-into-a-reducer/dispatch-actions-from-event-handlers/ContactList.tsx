import { Contact } from './Messenger';

type ContactListProps = {
  contacts: Contact[];
  selectedId: number;
  dispatch: (arg: { type: 'changed_selection'; contactId: number }) => void;
};

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: ContactListProps) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
