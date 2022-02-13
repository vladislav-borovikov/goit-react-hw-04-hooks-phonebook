import {useState, useEffect } from "react";
import Form from "./Form/Form";
import Filter from "./Filter";

import { nanoid } from "nanoid";
import RenderContacts from "./RenderContact";



const  Phonebook = () => {
    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState("")

  

  const submitData = (data) => {
    const contact = {
      id: nanoid(5),
      name: data.name,
      number: data.number,
    };
    const findedContact = contacts.find(
      (contact) => contact.name.toLocaleLowerCase() === data.name.toLowerCase()
    );
    if (findedContact) {
      alert(`${data.name} is already in contacts.`);
    } else
    setContacts((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  const changFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const visibleRender = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deletContact = (id) => {
    setContacts((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };


  useEffect(()=> {
    const phonebooke = localStorage.getItem('Phonebooke')
    const parsPhonebooke = JSON.parse(phonebooke)
  if (parsPhonebooke) {    
    setContacts(parsPhonebooke)}}, [])

  
    useEffect(() => {
      localStorage.setItem('Phonebooke', JSON.stringify(contacts))
    }, [contacts])
 


    return (
      <div>
        <h1> Phonebook </h1>
        <Form onSubmit={submitData} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changFilter} />
        <RenderContacts
          value={visibleRender()}
          onDelete={deletContact}
        />
      </div>
    );
  
}

export default Phonebook;
