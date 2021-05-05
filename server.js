'use strict'

var app = require('./app.js'), 
    app = require('./Models/mongodb')
    
    server = app.listen( app.get('port'), ()=>{
        console.log(`Iniciando en el puerto:${app.get('port')}`)
    })