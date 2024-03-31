const mongoose = require("mongoose");
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

// verify connection
connection.on("connected", () => {
  console.log("Mongo DB Connection Sucessfull");
});

//verify connection error
connection.on("error", (err) => {
  console.log("Mongo DB Connection Error", err);
});
