import css from "./SearchBox.module.css";
const SearchBox = ({ searchTerm, onSearchChange }) => {


  return (
      <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel} htmlFor="search">Find contacts by name</label>
          <input className={css.searchBoxInput} type="text" name="search" value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}></input>
      </div>
  )
}

export default SearchBox