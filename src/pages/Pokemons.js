import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import ListItemIcon from "../components/ListItemIcon";
import { fetchPokemons } from "../api/pokemons";
import LoadingScreen from "../components/LoadingScreen";

function Pokemons() {
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
    <>
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
    </>
  );
}

export default Pokemons;
