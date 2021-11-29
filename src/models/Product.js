const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
          name: DataTypes.STRING,
          image_url: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
      this.belongsTo(models.Category, {foreignKey: 'category_id', as: 'category'});
    }
}

module.exports = Product;