/* Ejemplo */
const { server, port } = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connected')
    server.listen(port, () => {
      console.log('server ready 8080')
    })
  })
  .catch(error => {
    console.error('error: ', error)
  })
