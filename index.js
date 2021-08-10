import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRouter.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);

app.use(express.json());
app.use("/pokemon", pokemonRouter);

app.listen(port, () => console.log(`Serever started in port ${port}`));
