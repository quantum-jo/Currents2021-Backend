const express = require('express');
const app = express();
const router = express.Router();

const routes = require('./routes/index.router.js');

app.use(routes);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port: ${port}`));
