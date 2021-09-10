import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { TeamContext } from "../../contexts/TeamContextManagment";
import { useContext } from "react";

const Equipo = () => {
const {team}= useContext(TeamContext)

console.log(team)

  return (
    <div className="lala">
      <Navbar />
      <Cards characters={team} borrar={true} limite={true} />
    </div>
  );
};

export default Equipo;
