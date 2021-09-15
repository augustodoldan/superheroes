import CardCharacter from "../CardCharacter";

const Cards = (props) => {
  const { characters, agregar, borrar } = props;

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row col-12">
        {characters.map((card, indice) => (
          <div className="col-md-4" key={indice}>
            <CardCharacter
              character={card}
              indice={indice}
              agregar={agregar}
              borrar={borrar}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
