import {Component} from "react";

export default class ContactList extends Component {
  render() {
    const {filter, contacts} = this.props;
    let relevantContacts;
    if (filter) {
      relevantContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    } else {
      relevantContacts = contacts;
    }
    return (
      <ul>
        {relevantContacts ? relevantContacts.map(contact => (
          <li key={contact.id}><p>{contact.name}: {contact.number}</p><button type="button" onClick={() => {this.props.deleteContact(contact.id)}}>Delete</button></li>
        )) : ""}
      </ul>
    );
  }
}