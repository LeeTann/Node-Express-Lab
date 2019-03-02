const express = require('express')
const cors = require('cors')
const routes = require('./data/router')
const server = express()

server.use(express.json())
server.use(cors())
server.use('/api/posts', routes)

server.get('/', (req, res) => {
    res.send('hello world from express js')
});

module.exports = server