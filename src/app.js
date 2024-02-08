import express from "express"

const app = express();

app.use(express.json());

//settings
let port;
app.set('port', port || 3000);

export default app;