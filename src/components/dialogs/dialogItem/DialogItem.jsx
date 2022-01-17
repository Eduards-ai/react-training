import React from 'react'
import { ContactLink, Contact } from '../Dialogs-style'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <Contact>
            <ContactLink to={path}>{props.name}</ContactLink>
        </Contact>
    );
}

export default DialogItem
