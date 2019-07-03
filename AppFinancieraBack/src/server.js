/* EJEMPLO */
const express = require('express')

const usersRouter = require('./routes/users')
const petsRouter = require('./routes/pets')

var app = express()
const port = 8080

app.use(express.json())
app.use('/users', usersRouter)
app.use('/pets', petsRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'pet api version 1'
  })
})

module.exports = {
  server: app,
  port
}