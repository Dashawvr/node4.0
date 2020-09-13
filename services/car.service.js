const connection = require('../dataBase').getInstance();

module.exports = {
    createCar: async (carObject) => {
        const Car = connection.getModel('Car')
        return Car.create(carObject, {new: true})
    },
    findAll: async  () => {
        const Car = connection.getModel('Car')
        return Car.findAll({})
    },
    getCarById: async (newId) => {
        const Car = connection.getModel('Car')
        return Car.findByPk(newId)
    },
    updateCar: async (id, car) => {
        const Car = connection.getModel('Car')
        return Car.update(car,{
            where: {
                id
            }
        })
    },
    deleteCar: async (id) => {
        const car = connection.getModel('Car')
        return car.destroy({
            where: {
                id
            }
        })
    }
}

