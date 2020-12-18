import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import FormSearializer from "form-serialize"


class AddContact extends Component {

    handleCreation = (event) => {
        event.preventDefault()
        const values = FormSearializer(event.target, {hash: true})
        this.props.createContact(values)
    }
    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact">Back</Link>
                <form onSubmit={this.handleCreation} className="create-contact-form">
                    <ImageInput
                    className="create-contact-avatar-input"
                    name="avatarURL"
                    ></ImageInput>
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="handle" placeholder="Handle" />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddContact