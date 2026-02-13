const { order } = require("../../models"); 

const getAllOrdersService = async () => {
  try {
    const orders = await order.findAll();
    return orders;
  } catch (error) {
    throw new Error("Error fetching orders: " + error.message);
  }
};

module.exports = { getAllOrdersService };
