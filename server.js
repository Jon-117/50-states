let express = require('express')
let states_api = require('./routes/states')

let app = express()

app.use(express.json())

app.use('/api', states_api)

app.use(function (req, res, next) {
    res.status(404).send("not found")
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send("Server Error")
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port ", server.address().port)
})