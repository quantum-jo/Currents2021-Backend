const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
const DB_config = require('./config/db.config');

mongoose.connect(`mongodb+srv://${DB_config.DB_username}:${DB_config.DB_password}@prakhi.jpsfe.mongodb.net/${DB_config.DB_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => console.log(err));


const routes = require('./routes/index.router.js');
app.use(express.json());
app.use(cors());
app.use(routes);


let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port: ${port}`));
