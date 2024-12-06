//import contactData from '../contacts.json';
import './App.css';
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";


function App() {
  
  return (
      <div>
         <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
         <SearchBox/>
         <ContactList/>
      </div>
  )
}

export default App
