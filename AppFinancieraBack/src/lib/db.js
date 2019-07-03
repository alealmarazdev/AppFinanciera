/* EJEMPLO */
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://ale:xxxx@cluster0-snmpm.mongodb.net/pets?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { userNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = { connect }
