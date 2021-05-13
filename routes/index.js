'use strict'


const express = require('express'),

    router = express.Router();
const Posde = require('../Models/post');




router.get('/', (req, res) => {
    let locals = {
        title: 'BIENVENIDOS'
    }
    res.render('index', locals)
});

router.get('/post', (req, res) => {

    res.send("pruebas");
});

router.post('/post', (req, res) => {
    console.log(req.body);
});

module.exports = router


