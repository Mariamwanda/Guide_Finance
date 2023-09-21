import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// import { connectDB } from "./config/db.js"
import connectDB from "./config/db.js";

import router from "./router/userRoute.js";

dotenv.config();

const port = 3000;
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}))
app.use("/api",router)

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Le serveur fonctionne sur http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
