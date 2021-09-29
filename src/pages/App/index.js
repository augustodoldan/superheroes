import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Equipo from "../Equipo";
import Agregar from "../Agregar";
import LoginForm from "../LoginForm";
import { Provider } from "react-redux";
import store from '../../store'
import { authGuard } from "../../auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
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
            </Provider>
      </Router>
    </div>
  );
}

export default App;
