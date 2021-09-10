import { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import "./Agregar.css";
import Cards from "../../components/Cards";
import { Alert } from "react-bootstrap";
import {  ErrorContext,
} from "../../contexts/ErrorContext";
import { useContext } from "react";
import axios from "axios";

const Agregar = () => {
  const [valueNavbar, setValueNavbar] = useState("");
  const [characters, setCharacters] = useState([]);
  const { error, setError } = useContext(ErrorContext);

  const handleClick = async () => {
    console.log(valueNavbar);
    const response = await axios.get(
      `https://superheroapi.com/api/10159358563962207/search/${valueNavbar}`
    )          
      
    const {data} = response;
    if (data.response === "error") {
      setError("La pagina falló");
    } else {
      setCharacters(data.results);
      setError(null);
    }

    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="grid">
        <div className="searchNavbar">
          <SearchBar
            setValueNavbar={setValueNavbar}
            handleClick={handleClick}
          />
        </div>
        <div className="main-elements">
          {error ? (
            <div className="alert-container">
              <Alert variant="danger">
                <Alert.Heading>{error}</Alert.Heading>
              </Alert>
            </div>
          ) : (
            <Cards characters={characters} agregar={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Agregar;
