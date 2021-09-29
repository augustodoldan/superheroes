import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import "./Equipo.css";

const Equipo = () => {
  const team = useSelector((state) =>{
    return state.team.team
  } );

  return (
    <div>
      <Navbar />

      {team.length === 0 ? (
        <div className="container-noTeam">
          <div className="text-noTeam">
            <p>Todavía no agregaste ningún superheroe!</p>
          </div>
          <div>
            <Link to="/agregar" className="link-noTeam">
              SUMÁ NUEVOS HEROES A TU EQUIPO!
            </Link>
          </div>
        </div>
      ) : (
        <Cards characters={team} borrar={true} limite={true} />
      )}
    </div>
  );
};

export default Equipo;
