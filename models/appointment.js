'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    doctor: DataTypes.STRING,
    patient: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'appointments',
    modelName: 'Appointment'
  });
  return Appointment;
};