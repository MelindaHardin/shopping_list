const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route 		GET api/items
//@desc 		Get All Items
//@access		Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});
//----------------------------------------------------------
//@route 		POST api/items
//@desc 		Create an Item
//@access		Public (private if we had authentication)
router.post("/", (req, res) => {
  //make an object to put into database
  const newItem = new Item({
    name: req.body.name
  });
  console.log(req.body);

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.status(422).json(err));
});
//----------------------------------------------------------

//@route 		DELETE api/items/:id
//@desc 		Delete an Item
//@access		Public (private if we had authentication)
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
