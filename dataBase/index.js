// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     user: 'root',
//     password: 'HomeHome20012018',
//     host: 'localhost',
//     database: 'cars-shop'
// });
//
// module.exports = connection.promise();


const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

    function  initConnection() {
        // const client = new Sequalize('cars-shop', 'root', 'HomeHome20012018', {
        //     host: 'localhost',
        //     dialect: 'mysql'
        // });
        const client = new Sequelize('cars-shop', 'root', 'HomeHome20012018', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files)=> {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = (require(path.join(process.cwd(),'dataBase', 'models', modelName)))
                    (client, DataTypes)
                })
            })
        }
        return{
            setModels: ()=> getModels(),
            getModel: (modelName)=> models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection()
            }
            return instance
        }
    }
})()
