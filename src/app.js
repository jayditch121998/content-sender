const express = require('express')
const uploadRoutes = require('./routes/uploadRoutes')

const app = express()
app.use(express.json())

app.use('/api', uploadRoutes)

module.exports = app
