const express = require("express");
const router = express.Router();

const { getAllOrdersController } = require("../controllers/orderControllers");

router.get("/orders", getAllOrdersController);

module.exports = router;
