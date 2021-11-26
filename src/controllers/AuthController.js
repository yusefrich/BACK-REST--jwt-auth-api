const User = require('../models/User');

module.exports = {
    /**
     * Index method listing all the users
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response all users
     */
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },
    /**
     * Index method to store a user
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response the user created
     */
    async store(req, res){
        const { name, email } = req.body;

        const user = await User.create({name, email});

        return res.json(user);
    }
}