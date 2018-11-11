const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const port =  process.env.PORT || 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

const metsRoutes = require('./src/routes/mets-routes')
app.use('/mets', metsRoutes)

app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    res.status(status).json({error: err})
})

app.use((req, res, next) => {
    res.status(404).json({error: {status: "404", message: 'No Mets with that ID were found'}})
})


const listener = () => console.log(`Listening on Port St Lucie. jk, ${port}...`)
app.listen(port, listener)


module.exports = app