import cors from "cors";
import express from "express";
import { log } from "@~/logger";
import { IndexRouter } from "@Routers/IndexRouter";

//init express app
const app = express();

//default configuration
app.use(express.json());
app.use(cors());

// the routers here
app.use("/", IndexRouter)

//listen on the port
app.listen(process.env.PORT, () =>
  log("info", `Express listening on Port ${process.env.PORT}!`)
);
