import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemIcon from "./components/ListItemIcon";

const bulbasaur = {
  name: "Bulbasaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  id: "001",
  link: "#bulbasaur",
};

const ivysaur = {
  name: "Ivysaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  id: "002",
  link: "#ivysaur",
};

const pokemons = [ivysaur, bulbasaur];

function App() {
  // const listItems = pokemons.map((pokemon) => {
  //   return (
  //     <ListItem href={pokemon.link}>
  //       <ListItemIcon src={pokemon.imgSrc} alt={`Picture of ${pokemon.name}`} />
  //       <ListItemText primary={pokemon.name} secondary={`#${pokemon.id}`} />
  //     </ListItem>
  //   );
  // });
  // const listItems = pokemons.map((pokemon) => (
  //   <ListItem href={pokemon.link}>
  //     <ListItemIcon src={pokemon.imgSrc} alt={`Picture of ${pokemon.name}`} />
  //     <ListItemText primary={pokemon.name} secondary={`#${pokemon.id}`} />
  //   </ListItem>
  // ));

  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main className="colorful-border">
        <List>
          {pokemons.map((pokemon) => (
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
