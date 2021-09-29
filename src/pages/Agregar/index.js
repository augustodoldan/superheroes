import { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import "./Agregar.css";
import Cards from "../../components/Cards";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { newErrorActions } from "../../store/error-slice";

const Agregar = () => {
  const [valueNavbar, setValueNavbar] = useState("");
  const [characters, setCharacters] = useState([]);
  const error = useSelector((state) => state.error.message);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await axios.get(
      `https://superheroapi.com/api/10159358563962207/search/${valueNavbar}`
    );

    const { data } = response;
    if (data.response === "error") {
      dispatch(newErrorActions.addError("La pagina falló"));

    } else {
      setCharacters(data.results);
      dispatch(newErrorActions.addError(null));

    
    }
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
