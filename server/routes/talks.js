const express = require('express')

const router = express.Router()

const Talk = require('../models/Talk')
const { getTalks, createTalk } = require('../controllers/talk')

const advancedResults = require('../middleware/advancedResults')

router
  .route('/')
  .get(advancedResults(Talk), getTalks)
  .post(createTalk)

module.exports = router
