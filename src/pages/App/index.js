import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Equipo from "../Equipo";
import Agregar from "../Agregar";
import LoginForm from "../LoginForm";
import TeamContextProvider from "../../contexts/TeamContextManagment";
import ErrorContextProvider from "../../contexts/ErrorContext";
import { authGuard } from "../../auth";

function App() {
  return (
    <div className="App">
      <Router>
        <TeamContextProvider>
          <ErrorContextProvider>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => authGuard(props, Equipo)}
              />
              <Route
                exact
                path="/agregar"
                render={(props) => authGuard(props, Agregar)}
              />
              <Route exact path="/login" component={LoginForm} />
            </Switch>
          </ErrorContextProvider>
        </TeamContextProvider>
      </Router>
    </div>
  );
}

export default App;
