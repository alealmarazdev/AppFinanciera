const express = require('express')

const userRouter = require('./routes/users')
const topicRouter = require('./routes/topics')
const themeRouter = require('./routes/themes')

const app = express()
const port = 8081

app.use(express.json())
app.use('/users', userRouter)
app.use('/topics', topicRouter)
app.use('/themes', themeRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'fishnance'
  })
})

module.exports = {
  server: app,
  port
}
