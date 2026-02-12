const { order } = require("../../models");

const getOrderDetailsService = async (order_id) => {
  const result = await order.findOne({
    where: { order_id },
  });

  return result;
};

module.exports = { getOrderDetailsService };
