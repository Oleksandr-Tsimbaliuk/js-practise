const BASE_URL = `https://pokeapi.co/api/v2`;

function fetchPokemonById(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json(),
  );
}

export default { fetchPokemonById };
