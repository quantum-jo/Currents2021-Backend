const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI,
                dbName: process.env.DB_NAME,
                user: process.env.DB_USER,
                password: process.env.DB_PASS);

mongoose.connection.once("open", function(){
  console.log("Connected to Database");
});
mongoose.connection.on("error", function(error){
  console.log("Connection Error:", error);
});
