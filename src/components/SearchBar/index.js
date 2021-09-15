import {FormControl, Button, InputGroup } from "react-bootstrap";
import "./SearchBar.css";

const SearchNavbar = ({ setValueNavbar, handleClick }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setValueNavbar(value);
  };

  const handlerKeyUp= (e)=>{
    if(e.keyCode === 13){
      handleClick()
    }
  }

  return (
    <div className="Searchbar-container">
      <InputGroup size="mb-3" className="mb-3">
        <FormControl
          onChange={handleChange}
          onKeyUp={handlerKeyUp}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          className="input-SearchBar"
          placeholder="Busca tu personaje favorito"
        />
        <Button onClick={handleClick} className="search-button">
          Buscar superheroe!
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchNavbar;
