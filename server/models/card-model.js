const { Schema, model } = require("mongoose");

const CardSchema = new Schema({
  card_number: { type: Number, unique: true, required: true },
  date: { type: Number, required: true },
  cvv: { type: Number, required: true },
  amount: { type: Number, required: true },
});

model.exports = model("Card", CardSchema);
