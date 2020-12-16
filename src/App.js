import React, { Component } from 'react'
import ListContact from './ListContacts'
import * as ContactsApi from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsApi.getAll()
    .then((contacts) => {
      this.setState(() => ({contacts:contacts}));
    })
  }


  removeContact = (contact) => {
    this.setState(currentState => ({
        contacts :currentState.contacts.filter(c => contact.id !== c.id)
      })
    );

    ContactsApi.remove(contact);
  }

  render() {
    return (
      <div>
        <ListContact
          contacts={this.state.contacts}
          onClickRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
