import React from "react";
import CONTACT from "../models/contact_class"
import ContactState from "./Contacts_state"

 const Contact = () => {

    const user1=new CONTACT("lucas","Zarate","mrlucaszarate@gmail.com",false)

    return(
        <div>
            <h2>Contact</h2>
            <h3>Name:{user1.name}</h3>
            <h3>LastName:{user1.surname}</h3>
            <h3>Email:{user1.email}</h3>
            <ContactState contact={user1}/>
        </div>
    )
}


export default Contact

