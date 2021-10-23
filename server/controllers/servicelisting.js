const Servicelisting = require('../modal/servicelisting');

// get all servicelist from the database.
exports.findAll = async (req, res) => {
    await Servicelisting.find()
        .then(servicelisting => {
            res.send(servicelisting);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving service list."
            });
        });
};
