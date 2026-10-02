export default function ContactList({filterString, contacts, deleteContact}) {
  let relevantContacts;
  if (filterString && contacts) {
    relevantContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterString));
  } else {
    relevantContacts = contacts;
  }
  return (
    <ul>
      {relevantContacts ? relevantContacts.map(contact => (
        <li key={contact.id}><p>{contact.name}: {contact.number}</p><button type="button" onClick={() => {deleteContact(contact.id)}}>Delete</button></li>
      )) : ""}
    </ul>
  );
}