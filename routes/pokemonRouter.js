import express from "express";

import { getAll, getSingle } from "../controllers/pokemon.js";

const pokemonRouter = express.Router();
pokemonRouter.get("/", getAll);
pokemonRouter.get("/:id", getSingle);

export default pokemonRouter;
