const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/currents2021");

mongoose.connection.once("open", function(){
  console.log("Connected to Database");
});
mongoose.connection.on("error", function(error){
  console.log("Connection Error:", error);
});
