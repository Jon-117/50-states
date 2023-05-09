let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function (req, res, next){
    States.findAll({ order:['name']}).then( states => {
        returnres.json(states)
    }).catch(err => next(err))
})

module.exports = router