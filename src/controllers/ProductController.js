const Product = require('../models/Product');

module.exports = {
    /**
     * Index method to list all Products
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response all Products array
     */
    async index(req, res){
      try {
        const products = await Product.findAll();
        return res.json(products);
      } catch (error) {
        return res.json({error});
      }
    },
    /**
     * Method to store a new product
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response the product created
     */
    async store(req, res){
        const { name, image_url, category_id } = req.body;
        try {
          const product = await Product.create({name, image_url, category_id});
          return res.json(product);
        } catch (error) {
          return res.json({error});
        }
    },
    /**
     * Method to delete a new product
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response 200 if product created
     */
     async delete(req, res){
      const { product_id } = req.params;
      
      const product = await Product.findByPk(product_id);

      if(!product) {
          return res.status(400).json({error: 'Product not found'});
      }

      product.destroy();

      return res.status(200).json({message: 'Product successfully deleted'});
  },
}