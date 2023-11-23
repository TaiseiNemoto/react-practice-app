export default function Chat({ contact, message, dispatch }) {
  return (
    <section>
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // todo
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
