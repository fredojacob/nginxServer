'use strict'
var express = require('express'),
    router = express.Router()

                    router.get('/', (req, res )=> {
                            let locals = {
                                title: 'BIENVENIDOS'
                            }
                    res.render('index', locals)
                    })



module.exports = router


