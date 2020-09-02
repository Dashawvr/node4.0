const connection = require('../dataBase').getInstance();

module.exports = {
    createCar: async (carObject) => {
        const Car = connection.getModel('Car')
        return Car.createCar(carObject, {new: true})
    },
    findAll: async  () => {
        const Car = connection.getModel('Car')
        return Car.findAll({})
    },
    getCarById: async (newId) => {
        const Car = connection.getModel('Car')
        return Car.getCarId(newId)
    },
    updateCar: async (Id, car) => {
        const Car = connection.getModel('Car')
        return Car.updateCar(car,{
            where: {
                id: Id
            }
        })
    },
    deleteCar: async (Id) => {
        const Car = connection.getModel('Car')
        return Car.destroyCar({
            where: {
                id: Id
            }
        })
    }
}

