import { useEffect, useState } from 'react';
import contactData from '../contacts.json';
import './App.css';
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';


function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? contactData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts)) }, [contacts]);


  
  const handleDelete = id => setContacts(prev => prev.filter(item => item.id !== id));
  
   
  const onAdd = (values) => {
    const newContact = { ...values, id: nanoid(4) };
    setContacts(prev => [...prev, newContact]);
    };
  
  const handleSearchChange = (value) => {setSearchTerm(value);};
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
         <h1>Phonebook</h1>
        <ContactForm onAdd={onAdd}/>
         <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
         <ContactList contacts={filteredContacts} onDelete={handleDelete}/>
      </div>

    </>
  )
}

export default App
