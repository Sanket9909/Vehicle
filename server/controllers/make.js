const Make = require('../modal/make');


// Create and Save a new customer
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "car name content can not be empty"
        });
    }

    // Create a customer name
    const make = new Make({
        name: req.body.name,
        cars: req.body.cars,
        createdDate: new Date(),
        changeDate: new Date()
    });


    // Save customer in the database
    await make.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the customer list."
            });
        });
};

// Retrieve and return all customer from the database.
exports.findAll =  (req, res) => {
     Make.find()
        .then(make => {
            res.send(make);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving make list."
            });
        });
};