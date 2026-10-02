import {useEffect, useState} from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import {nanoid} from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : 
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]}),
    [filterString, setFilterString] = useState('');
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem("contacts");
  //   if(savedContacts) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);
  const addContact = (name, number) => {
    if(contacts.find(contact => contact.name === name)) {
      alert(name + " is alerady in contacts.")
      return;
    }
    setContacts(prev =>
      [...prev, {
      id: nanoid(),
      name,
      number,
    }])
  }
  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])
  const getFilter = (event) => {
    setFilterString(event.currentTarget.value.toLowerCase());
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <h2>Contacts</h2>
      <Filter getFilter={getFilter}/>
      <ContactList filterString={filterString} contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;