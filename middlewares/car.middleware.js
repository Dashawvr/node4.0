module.exports = {
    carsValid: (req, res, next) => {
        try {
            const car = req.body;
            if (!car.model || !car.price || car.year) {
                throw new Error('Input values is required')
            }
            next();
            if (car.price < 0 || car.price === 0) {
                throw new Error('Price should be positive')
            }
            next();
            if (car.year > 2020 || car.year <= 1000) {
                throw new Error('Undefined year. Please check year again')
            }
            next();

        } catch (e) {
            return res.status(400).json(e.message);
        }
    }
}
