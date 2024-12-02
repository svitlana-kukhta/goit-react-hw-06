import css from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contactItem}>
     <span className={css.contactText}>
  <span>{name}:</span>
  <span>{number}</span>
</span>
     
      <button className={css.contactItemDelete} onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Contact