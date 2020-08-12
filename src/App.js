import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main className="colorful-border">
        <List>
          Dies ist ein Children von List
          {/* <ListItem href="#">
            <ListItemIcon src="" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>

          <ListItem href="#">
            <ListItemIcon src="" />
            <ListItemText primary="Ivysaur" secondary="#002" />
          </ListItem> */}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
