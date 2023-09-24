// Imports to executed cloudStore.
import { onRequest } from "firebase-functions/v2/https";

// Imports to libs to work backend.
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Controller centered.
import routes from "./routes/v1";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true })); // se usa para los post
app.use(bodyParser.json());
app.use(cors());

// Established functionality of paths.
routes(app);

export const apiFirestore = onRequest(app);
