import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemIcon from "./components/ListItemIcon";
import { fetchPokemons } from "./api/pokemons";
import LoadingScreen from "./components/LoadingScreen";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <header>
              Pokemons{" "}
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Enter name"
              />
            </header>
            <main className="colorful-border">
              <List>
                {filteredPokemons.map((pokemon) => (
                  <ListItem key={pokemon.id} href={pokemon.link}>
                    <ListItemIcon
                      src={pokemon.imgSrc}
                      alt={`Picture of ${pokemon.name}`}
                    />
                    <ListItemText
                      primary={pokemon.name}
                      secondary={`#${pokemon.id}`}
                    />
                  </ListItem>
                ))}
              </List>
            </main>
          </Route>
          <Route path="/items">ITEMS</Route>
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
