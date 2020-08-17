export async function fetchPokemons() {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  const pokemons = result.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: pokemon.sprites.animated,
  }));
  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );
  return uniquePokemons;
}

export async function fetchPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
  };
  return pokemon;
}
