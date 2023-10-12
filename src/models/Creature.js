const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  //TODO
});

const Creature = mongoose.model("Creature", creatureSchema);
module.exports = Creature;
