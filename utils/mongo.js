import mongoose from "mongoose";
import config from "config";


mongoose
    .connect(config.get("db"))
    .then(() => console.log("connection mongodb"))
    .catch((er) => console.log(er.message));
