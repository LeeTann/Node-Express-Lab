const server = require('./server')
const port = 9001

server.listen(port, () => console.log(`Listening to port ${port}`))