import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemIcon from "./components/ListItemIcon";

function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="#bulbasaur">
            <ListItemIcon
              src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
              alt="Picture of Bulbasaur"
            />
            <ListItemText primary="Bulbasaur" secondary="#001" />
            <ListItemIcon
              src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg"
              alt="Picture of Bulbasaur"
            />
          </ListItem>
          <ListItem href="#ivysaur">
            <ListItemIcon
              src="https://img.pokemondb.net/artwork/large/ivysaur.jpg"
              alt="Picture of Ivysaur"
            />
            <ListItemText primary="Ivysaur" secondary="#002" />
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
