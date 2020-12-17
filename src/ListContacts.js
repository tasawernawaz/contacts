import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListContacts extends Component {
  static propTypes = {
    contacts : PropTypes.array.isRequired,
    onClickRemoveContact: PropTypes.func.isRequired,
  }

  state  = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value.trim()
    })
  }

  resetQuery = () => {
    this.setState({
      query: ""
    })
  }

  render () {

    const {query} = this.state;
    const {contacts, onClickRemoveContact} = this.props;

    const showingContacts = query === "" ?
    contacts: (
      contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) )
    )


    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            name="query"
            placeholder="Search query"
            value={query}
            onChange={this.handleChange}
          />

          <Link
          to="/add-contact"
          className="add-contact"
          >
          Add Contact
          </Link>
        </div>
        {query.length > 0 &&
          <div className="showing-contacts">
          <span>Showing {showingContacts.length} of {contacts.length}.</span>
            <button onClick={this.resetQuery} >Show All </button>
          </div>
        }
        <ol className="contact-list">
          {showingContacts.map(contact =>
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
              >
              </div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button className="contact-remove" onClick={() => onClickRemoveContact(contact) }
              > Remove
              </button>
            </li>
          )}
        </ol>
      </div>
    )
  }
}


export default ListContacts;