import { Accordion } from "react-bootstrap";
import "../CardCharacter/CardCharacter.css";
import { useSelector, useDispatch } from "react-redux";
import { newTeamActions } from "../../store/team-slice";
import { newErrorActions } from "../../store/error-slice";

const CardCharacter = ({ agregar, borrar, character, indice }) => {
  const { work, image, name, powerstats, appearance, biography } = character;
  const team = useSelector((state) => state.team.team);
  const dispatch = useDispatch();

  const addCharacter = () => {
    const newTeam = [...team];
    newTeam.push(character);
    const esValido = validarEquipo(newTeam);

    if (esValido) {
      dispatch(newTeamActions.addHero(character));
    }
  };

  const validarEquipo = (team) => {
    if (team.length >= 7) {
      dispatch(newErrorActions.addError("Podés poner hasta 6 superheroes"));
      return false;
    }

    let numeroDeBuenos = 0;
    let numeroDeMalos = 0;

    for (let i = 0; i <= team.length - 1; i++) {
      let superheroe = team[i];
      if (superheroe["biography"]["alignment"] === "good") {
        numeroDeBuenos = numeroDeBuenos + 1;
      } else if (superheroe["biography"]["alignment"] === "bad") {
        numeroDeMalos = numeroDeMalos + 1;
      }
    }

    if (numeroDeBuenos > 3 || numeroDeMalos > 3) {
      dispatch(
        newErrorActions.addError(
          "Sólo podes agregar 3 superheroes con el mismo 'alignment'"
        )
      );

      return false;
    }

    return true;
  };

  const deleteCharacter = () => {
    dispatch(newTeamActions.deleteHero(indice));
  };

  const acumulativoPowerstats = Math.round(
    (parseInt(powerstats["intelligence"]) +
      parseInt(powerstats["strength"]) +
      parseInt(powerstats["speed"]) +
      parseInt(powerstats["durability"]) +
      parseInt(powerstats["power"]) +
      parseInt(powerstats["combat"])) /
      6
  );

  return (
    <div className="CardCharacterComponent">
      <div className="card text-center bg-dark">
        <div className="overflow">
          <img
            src={image.url}
            className="card-img-top img-card"
            alt="imagen del superheroe"
          />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Powerstats: {acumulativoPowerstats}</p>
          <Accordion defaultActiveKey="0" flush className="card-text">
            <Accordion.Item eventKey="1" className="bg-dark">
              <div className="button-details">
                <Accordion.Header className="card-text">
                  +detalles
                </Accordion.Header>
              </div>
              <Accordion.Body>
                <p className="card-text">Peso: {appearance.weight[1]}</p>
                <p className="card-text">Altura: {appearance.height[1]}</p>
                <p className="card-text">Nombre: {biography["full-name"]}</p>
                <p className="card-text">Alias: {biography.aliases[0]}</p>
                <p className="card-text">
                  Color de ojos: {appearance["eye-color"]}
                </p>
                <p className="card-text">
                  Color de pelo: {appearance["hair-color"]}
                </p>
                <p className="card-text">Lugar de trabajo: {work.occupation}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {agregar ? (
            <button onClick={addCharacter} className="add-button">
              Agregar
            </button>
          ) : (
            <></>
          )}
          {borrar ? (
            <button onClick={deleteCharacter} className="delete-button">
              Eliminar
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardCharacter;
