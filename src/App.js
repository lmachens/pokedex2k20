import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemIcon from "./components/ListItemIcon";
import { fetchPokemons } from "./api/pokemons";

function App() {
  const [pokemons, setPokemons] = React.useState(null);

  const handleClick = async () => {
    const allPokemons = await fetchPokemons();
    setPokemons(allPokemons);
  };

  return (
    <div className="app">
      <header>
        Pokedex <input />
        <button onClick={handleClick}>Load Pokemons</button>
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
