const { Schema, model, ObjectId } = require("mongoose");

const CardSchema = new Schema({
  card_number: { type: Number, required: true },
  date: { type: String, required: true },
  cvv: { type: Number, required: true },
  amount: { type: Number, required: true },
  files: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("Card", CardSchema);
