'use strict'
var express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    let locals = {
        title: 'BIENVENIDOS'
    }
    res.render('index', locals)
});

router.get('/post', (req, res) => {

    res.send("pruebas");
});



module.exports = router


