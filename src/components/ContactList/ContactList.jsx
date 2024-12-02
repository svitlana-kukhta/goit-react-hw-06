import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({contacts, onDelete}) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li key={contact.id}><Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)} /></li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList