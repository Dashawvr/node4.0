const express = require('express');
const app = express();
app.use(express.json())

const carRouter = require('./routes/car.router');
const instance = require('./dataBase').getInstance()
instance.setModels()

app.use('/cars', carRouter);

app.listen('5000', (err)=> {
    if(err) {
        console.log(err);
    }
    console.log('Server 5000');
})

