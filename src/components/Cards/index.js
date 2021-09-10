import CardCharacter from "../CardCharacter";
import { Alert } from "react-bootstrap";

const Cards = (props) => {
  const { characters, agregar, borrar, limite } = props;

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          characters.map((card, indice) => (
            <div className="col-md-4" key={indice}>
              <CardCharacter
                character={card}
                indice={indice}
                agregar={agregar} 
                borrar={borrar}
              />
            </div>
          ))
        }
        
{/*           <div className="alert-container">
            <Alert variant="danger">
              <Alert.Heading>
                Superamigo, tenemos algo que decirte:
              </Alert.Heading>
              <p>SOLO PODES PONER HASTA SEIS PERSONAJES!</p>
              <hr />
            </Alert>
          </div> */}
      </div>
    </div>
  );
};

export default Cards;
