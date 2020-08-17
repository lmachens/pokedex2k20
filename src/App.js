import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import Items from "./pages/Items";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Redirect to="/pokemons" />
          </Route>
        </Switch>
        <footer>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
