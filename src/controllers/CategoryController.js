const Category = require('../models/Category');

module.exports = {
    /**
     * Index method to list all categories
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response all categories array
     */
    async index(req, res){
      try {
        const categories = await Category.findAll();
        return res.json(categories);
      } catch (error) {
        return res.json({error});
      }
    },
    /**
     * Method to store a new category
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response the category created
     */
    async store(req, res){
        const { name } = req.body;
        try {
          const cat = await Category.create({name});
          return res.json(cat);
        } catch (error) {
          return res.json({error});
        }
    },
    /**
     * Method to delete a new category
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response 200 if category created
     */
     async delete(req, res){
      const { category_id } = req.params;
      
      const cat = await Category.findByPk(category_id);

      if(!cat) {
          return res.status(400).json({error: 'Category not found'});
      }

      cat.destroy();

      return res.status(200).json({message: 'Category successfully deleted'});
  },
}