const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const jokesRoutes = require('./jokes.js')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)


server.use('/api/v1/jokes', jokesRoutes)

module.exports = server
