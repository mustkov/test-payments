const Router = require("express");
const CardSchema = require("./card-model");
const router = new Router();

router.post("/payments", async (req, res) => {
  try {
    const { card_number, date, cvv, amount } = req.body;
    const CreateCard = new CardSchema({ card_number, date, cvv, amount });
    await CreateCard.save();
    return res.json({
      RequestId: CreateCard._id,
      amount: req.body.amount,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
