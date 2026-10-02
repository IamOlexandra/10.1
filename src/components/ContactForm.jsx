import { useState } from "react";

export default function ContactForm({addContact}) {
  const [name, setName] = useState(""),
    [number, setNumber] = useState("");
  function handleChange(event) {
    const input = event.currentTarget;
    if(input.name === "name") {
      setName(input.value);
    } else if(input.name === "number") {
      setNumber(input.value);
    }
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addContact(name, number);
      event.currentTarget.reset();
      setName("");
      setNumber("");
    }}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}