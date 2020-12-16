const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

//set up paths
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

module.exports = app
