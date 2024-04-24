import mongoose from "mongoose";
import { log } from "./logger";

//connect to the database
mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then(() => log("info", "Connected to MongoDB!"));
