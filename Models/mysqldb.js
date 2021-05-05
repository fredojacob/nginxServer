'use strict'

var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOption = {
        host: '',
        user: '',
        password: '',
        port: 3306,
        database: ''        
    },
    Movies = myConnection(mysql, dbOption, 'request')

module.exports = Movies


