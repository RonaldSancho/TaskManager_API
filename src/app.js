import express from "express"
import config from "./config.js";

const app = express();

app.use(express.json());

//settings
app.set('port', config.port);

export default app;