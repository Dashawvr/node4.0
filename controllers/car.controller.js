const {carService} = require('../services');

module.exports = {
    createCar: async (req, res) => {
        try {
            const car = await carService.createCar(req.body)
            res.status(201).json(car);
        }
        catch (e) {
            res.end(e.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const cars = await carService.findAll()
            res.json(cars);
        }
        catch (e) {
            res.end(e.message);
        }
    },
    getCarId: async (req, res) => {
        try {
            const car = await carService.getCarById(+req.params.id)
            res.json({car});
        }
        catch (e) {
            res.end(e.message);
        }
    },
    updateCar: async (req, res) => {
        try {
            const car = await carService.updateCar(req.body, +req.params.id)
            res.json(car, 'Updated Successfully');
        }
        catch (e) {
            res.end(e.message);
        }
    },
    destroyCar: async (req, res) => {
        try {
            const car = await carService.deleteCar(+req.params.id)
            res.status(200).json(car);
        }
        catch (e) {
            res.end(e.message);
        }
    }
}
