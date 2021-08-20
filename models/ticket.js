'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer,{foreignKey: 'customerId'});
      this.belongsTo(models.TicketType, {foreignKey: 'ticketTypeId'});
    }
  };
  Ticket.init({
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    finalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    dateTo: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });

  return Ticket;
};