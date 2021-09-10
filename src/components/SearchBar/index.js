import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import "./SearchBar.css";

const SearchNavbar = ({ setValueNavbar, handleClick }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setValueNavbar(value);
  };

  const handlerKeyUp= (e)=>{
    if(e.keyCode == 13){
      handleClick()
    }
  }

  return (
    <div className="SearchNavbar-container">
      <InputGroup size="mb-3" className="mb-3">
        <FormControl
          onChange={handleChange}
          onKeyUp={handlerKeyUp}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <Button onClick={handleClick} variant="danger">
          Buscar superheroe!
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchNavbar;
