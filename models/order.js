module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      product: DataTypes.STRING,
      total_price: DataTypes.STRING
    },
    {
      tableName: "orders",
      timestamps: false 
    }
  );

  return order;
};
