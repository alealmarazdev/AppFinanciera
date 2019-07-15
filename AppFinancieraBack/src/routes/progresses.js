const express = require('express')

const progress = require('../usecases/progress')
const router = express.Router()

router.use(express.json())

router.post('/', async (req, res) => {
  try {
    const newProgressData = req.body
    const newProgress = await progress.newTopic(newTopicData)
    res.json({
      success: true,
      message: 'topico creado',
      payload: {
        newTopic
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'topico no creado',
      error: error.message
    })
  }
})
