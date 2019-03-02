const express = require('express')

const server = express()
const port = process.env.PORT || 9001

server.use(express.json())

server.listen(port, () => console.log(`Listening to port ${port}`))