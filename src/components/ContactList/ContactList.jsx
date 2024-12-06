import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

const ContactList = () => {
const contacts = useSelector(selectContacts);
const filter = useSelector(selectNameFilter);
const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (

          <Contact key={contact.id} contact={contact}/>

        ))}
      </ul>
    </div>
  )
}

export default ContactList