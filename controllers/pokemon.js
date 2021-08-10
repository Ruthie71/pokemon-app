import pokemon from "../data/pokemon.js";

const checkIfPokemonInArray = (id) => {
    if (!id) return null;
    const sanitisedEntry = id.toUpperCase();
    return pokemon.find(
        (pokemon) =>
            pokemon.id === sanitisedEntry || pokemon.name === sanitisedEntry
    );
};

export const getAll = (req, res) => res.json(pokemon);

export const getSingle = (req, res) => {
    const { id } = req.params;
    const pokemon = checkIfPokemonInArray(id);

    if (!pokemon)
        return res.status(404).json({ error: "Pokemon does not exist" });
    res.statud(200).json(pokemon);
};
