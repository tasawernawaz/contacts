import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ListContacts extends Component {

  render () {
    return (

    <ol className="contact-list">
        {this.props.contacts.map(contact =>
          <li key={contact.id} className="contact-list-item">
            <div className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
            >

            </div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>@{contact.handle}</p>
            </div>
            <button className="contact-remove" onClick={() => this.props.onClickRemoveContact(contact) }
            > Remove
            </button>
          </li>
        )}

      </ol>
    )
  }
}


ListContacts.PropTypes = {
  contacts : PropTypes.array.isRequired,
  onClickRemoveContact: PropTypes.func.isRequired,
}
export default ListContacts;