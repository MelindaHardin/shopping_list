//dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const items = require("./routes/api/items");

//bodyparser middleware
// Configure body parser for AJAX requests
app.use(express.json({ extended: false }));

//mongo db
const mongoose = require("mongoose");

//connect to Mongo
mongoose
  .connect("mongodb://localhost/shopping", {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongo is connected!"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

app.listen(port, () => console.log(`Server started on ${port}`));
