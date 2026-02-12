const { getOrderDetailsService } = require("../services/orderServices");

const getOrderDetailsController = async (req, res) => {
  try {
    const { order_id } = req.params;

    const orderData = await getOrderDetailsService(order_id.trim());

    if (!orderData) {
      return res.status(404).json({ message: "order not found" });
    }

    return res.status(200).json(orderData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getOrderDetailsController };
