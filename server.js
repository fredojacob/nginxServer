'use strict'

const app = require('./app.js');
const connectBD = require('./Models/mongodb');


connectBD();
app.listen(app.get('port'), () => {
    console.log(`Iniciando en el puerto:${app.get('port')}`)
});