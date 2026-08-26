import {Component} from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import {nanoid} from "nanoid";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if(savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)});
    }
  }
  addContact = (name, number) => {
    if(this.state.contacts.find(contact => contact.name === name)) {
      alert(name + " is alerady in contacts.")
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, {
        id: nanoid(),
        name,
        number,
      }]
    }));
  }
  deleteContact = id => {
    this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts === this.state.contacts) {
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  getFilter = event => {
    this.setState({filter: event.currentTarget.value.toLowerCase()});
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>
        <h2>Contacts</h2>
        <Filter getFilter={this.getFilter}/>
        <ContactList filter={this.state.filter} contacts={this.state.contacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;