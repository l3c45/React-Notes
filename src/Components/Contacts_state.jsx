import React,{useState} from "react"
import CONTACT from "../models/contact_class"
import { ReactPropTypes } from "react"

 const ContactStatus = ({contact}) => {

    const [state,setState]=useState(contact.status)


    const changeStatus =()=>{

        setState(!state)

    }

    return (
        <div>
            <h3>Status:{state?"Conected":"Disconected"}</h3>
            <button onClick={changeStatus}>
                 Changue Status
            </button>
        </div>
    )
}

ContactStatus.ReactPropTypes = {
    contact: ReactPropTypes.instanceof(CONTACT)
}

export default ContactStatus