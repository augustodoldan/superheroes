import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Equipo from "../Equipo";
import Agregar from "../Agregar";
import TeamContextProvider from "../../contexts/TeamContextManagment";
import ErrorContextProvider from "../../contexts/ErrorContext";


function App() {


  return (
    <div className="App">
      <Router>
        <TeamContextProvider>
            <ErrorContextProvider>
          <Switch>
            <Route exact path="/" component={Equipo} />
              <Route exact path="/agregar" component={Agregar} />
          </Switch>
            </ErrorContextProvider>
        </TeamContextProvider>
      </Router>
    </div>
  );
}

export default App;
