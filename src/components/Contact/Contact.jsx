import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.contactItem}>
     <span className={css.contactText}>
           {contact.name}: {contact.number}
     </span>
     
      <button className={css.contactItemDelete} onClick={onDelete}>Delete</button>
    </li>
  )
}

export default Contact