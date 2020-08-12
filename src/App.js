import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="#bulbasaur">
            <div>Icon</div>
            <div
              style={{
                flexGrow: 1,
              }}
            >
              Text
            </div>
            <div>Icon</div>
            {/* <ListItemIcon src="" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
            <ListItemIcon src="" />
            <ListItemIcon src="" /> */}
          </ListItem>
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
