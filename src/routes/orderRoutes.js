const express = require("express");
const router = express.Router();

const { getOrderDetailsController } = require("../controllers/orderControllers");

router.get("/orders/:order_id", getOrderDetailsController);

module.exports = router;
