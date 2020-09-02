module.exports = {
    carsValid: (req, res, next) => {
        try {
            const car = req.body;
            if (!car.model || !car.year || car.price) {
                throw new Error('Input values is required')
            }

            if (car.price < 0 || car.price === 0) {
                throw new Error('Price should be positive')
            }
            if (car.year > 2020 || car.year.length < 4) {
                throw new Error('Undefined year. Please check year again')
            }
            next();

        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
