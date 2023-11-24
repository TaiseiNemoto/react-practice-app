import { Contact } from './Messenger';

type ChatProps = {
  contact: Contact;
  message: string;
  dispatch: (arg: { type: 'edited_message'; message: string }) => void;
};

export default function Chat({ contact, message, dispatch }: ChatProps) {
  return (
    <section>
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
