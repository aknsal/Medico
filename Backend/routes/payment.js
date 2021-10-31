const express = require("express");
const router = express.Router();

const {
  validatePayment,
  payOrder
} = require("../controllers/paymentController");


router.post("/validatePayment",validatePayment);

router.post("/pay",payOrder)

module.exports = router;
