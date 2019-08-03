//dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const port = process.env.PORT || 5000;

const items = require("./routes/api/items");

//bodyparser middleware
// Configure body parser for AJAX requests
app.use(express.json({ extended: false }));

//connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongo is connected!"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

app.listen(port, () => console.log(`Server started on ${port}`));
