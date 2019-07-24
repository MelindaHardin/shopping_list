//server
const express = require("express");
const app = express();

//mongo db

const mongoose = require("mongoose");

//bodyparser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//connect to Mongo
mongoose
  .connect("mongodb://localhost/shopping", {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongo is connected!"))
  .catch(err => console.log(err));

//server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

//PICK UP AT 13:00 ON VIDEO 2 TO CREATE API AND MODEL FOR DB
