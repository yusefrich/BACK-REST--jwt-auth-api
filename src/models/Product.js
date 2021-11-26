const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            value: DataTypes.STRING,
            category: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
      this.hasMany(models.User, {foreignKey: 'creator_id', as: 'users'});
    }
}

module.exports = Address;