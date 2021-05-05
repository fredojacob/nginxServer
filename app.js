'use strict'
var express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    jade = require('jade'),
    routes = require('./routes/index'),
    // necesito 3 rutas
    // primera la que necesita el modulo de favicon
    faviconURL = `${__dirname}/public/img/favicon.ico`,
    //declaro la carpeta publica como un archivo statico
    publicDIR = express.static(`${__dirname}/public`),
    viewDIR= `${__dirname}/views`,
    port = (process.env.PORT ||3000),
    app = express()
//configurando app
    app
        .set('views', viewDIR)
        .set('view engine', 'pug')
        .set('port', port)
//ejecutando midleware
       app
            .use(favicon (faviconURL) )
            .use( bodyParser.json() )
            //toda la informacion del formulario se parse application/x-www-form-urlencoded
            .use( bodyParser.urlencoded( { extended: true}) )
            .use( morgan('dev') )
            .use ( publicDIR )
        // ejecuto el midleware enrutador
            .use(routes)          
module.exports = app
