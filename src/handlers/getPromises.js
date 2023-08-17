import getPokemonById from "../apis/getPokemonById.js";

const getPromises = async (ids = []) => {
    const pokemonPromises = ids.map((id) => getPokemonById(id));
    const pokemons = await Promise.all(pokemonPromises);
    return pokemons;
};

export default getPromises;