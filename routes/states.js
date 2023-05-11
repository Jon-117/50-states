let express = require('express')
const {where} = require("sequelize");
let States = require('../models').States

let router = express.Router()



router.get('/states', function (req, res, next){
    States.findAll({ order:['name']}).then( states => {
        console.log(states)
        return res.json(states)
    }).catch(err => next(err))
})

router.get('/state/:name', function (req, res, name) {
    let stateName = req.params.name
    States.findOne({where: {name: stateName}}).then( state => {
        if (state) {
            res.json(state)
        } else {
            return res.status(404).send('State Not Found')
        }
    })
})

// add patch route for updating states visited status
router.patch('/states/:name', function (req,res,next){
    let stateName = req.params.name
    let stateVisitedStatus = req.body.visited

    States.update({visited: stateVisitedStatus}, {where: {name: stateName}})
        .then(rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated === 1) {
                return res.send('ok')
            }
            return res.status(404).send("° State Not Found °")
        }).catch( err => next(err) )
})


module.exports = router