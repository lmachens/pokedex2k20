import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemIcon from "./components/ListItemIcon";
import { fetchPokemons } from "./api/pokemons";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await waitFor(2000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main className="colorful-border">
        <List>
          {pokemons?.map((pokemon) => (
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
      <footer>Footer</footer>
    </div>
  );
}

export default App;
