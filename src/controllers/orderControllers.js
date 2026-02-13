const { getAllOrdersService } = require("../services/orderServices");

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrdersService();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch orders",
    });
  }
};

module.exports = { getAllOrdersController };
