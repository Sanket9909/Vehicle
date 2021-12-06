const Service = require('../modal/service');

// Create and Save a new service
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.service_name) {
        return res.status(400).send({
            message: "Service content can not be empty"
        });
    }

    // Create a service
    const service = new Service({
        service_name: req.body.service_name,
        vehicle_number: req.body.vehicle_number,
        totalbill: req.body.totalbill || 0,
        createdDate: new Date(),
        changeDate: new Date()
    });

    // Save service in the database
    await service.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the service list."
            });
        });
};


// Retrieve and return all service from the database.
exports.findAll = async (req, res) => {
    await Service.find()
        .then(service => {
            res.send(service);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving service list."
            });
        });
};

// Find a single service with a serviceId
exports.findOne = async (req, res) => {
    const serviceId = req.params.serviceId;
    await Service.findById(serviceId)
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + serviceId
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "service not found with id " + serviceId
                });
            }
            return res.status(500).send({
                message: "Error retrieving service with id " + serviceId
            });
        });
};

// Update a service identified by the serviceId in the request
exports.update = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const serviceId = req.params.serviceId;
    // Find service and update it with the request body
    await Service.findByIdAndUpdate(serviceId, req.body, { useFindAndModify: false })

        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + req.params.serviceId
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "service not found with id " + req.params.serviceId
                });
            }
            return res.status(500).send({
                message: "Error updating service with id " + req.params.serviceId
            });
        });
};

// Delete a service with the specified serviceId in the request
exports.delete = async (req, res) => {
    const serviceId = req.params.serviceId;
    await Service.findByIdAndRemove(serviceId)
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + serviceId
                });
            }
            res.send({ message: "service deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "service not found with id " + serviceId
                });
            }
            return res.status(500).send({
                message: "Could not delete service with id " + serviceId
            });
        });
};