import { Contact } from './Messenger';

type DispatchArg =
  | {
      type: 'edited_message';
      message: string;
    }
  | {
      type: 'sent_message';
    };

type ChatProps = {
  contact: Contact;
  message: string;
  dispatch: (arg: DispatchArg) => void;
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
      <button
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: 'sent_message',
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
