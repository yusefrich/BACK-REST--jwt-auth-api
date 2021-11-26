const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    /**
     * Index method listing all addresses in the database
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response all addresses list
     */
    async index(req, res){

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses'}
        });

        if(!user) {
            return res.status(400).json({error: 'User not found'});
        }

        return res.json(user);
    },
    /**
     * Get a single user address
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response a single address data
     */
    async single(req, res){

        const { user_id } = req.params;
        const { adress_id } = req.params;

        const adress = await Address.findByPk(adress_id);

        if(!adress) {
            return res.status(400).json({error: 'User not found'});
        }
        return res.json(adress);
    },
    /**
     * Store a address to a user in the database
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response address created
     */
    async store(req, res){
        const { user_id } = req.params;
        const { state, city, zipcode, street, neigh } = req.body;

        //* checking if the user is trying to edit another users data
        if(user_id != req.user.id && req.user.role.name != "admin"){
            return res.status(401).json({error: 'Permition denied'});
        }

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({error: 'User not found'});
        }

        const address = await Address.create({
            state,
            city,
            zipcode,
            street,
            neigh,
            user_id
        })

        return res.json(address);
    },
    /**
     * Update a user address
     * @param {Object} req
     * @param {Object} res
     * @returns {Object} response address updated
     */
    async update(req, res){
        const { user_id } = req.params;
        const { adress_id } = req.params;
        const { state, city, zipcode, street, neigh } = req.body;

        //* checking if the user is trying to edit another users data
        if(user_id != req.user.id && req.user.role.name != "admin"){
            return res.status(401).json({error: 'Permition denied'});
        }

        const user = await User.findByPk(user_id);
        const adress = await Address.findByPk(adress_id);

        if(!user) {
            return res.status(400).json({error: 'User not found'});
        }

        await adress.update({
            state,
            city,
            zipcode,
            street,
            neigh,
            user_id
        })

        return res.json(adress);
    }
}