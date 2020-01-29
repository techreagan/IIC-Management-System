const express = require('express')

const router = express.Router()

const Talk = require('../models/Talk')
const {
  getTalks,
  createTalk,
  addAttendee,
  deleteTalk
} = require('../controllers/talks')

const advancedResults = require('../middleware/advancedResults')

router
  .route('/')
  .get(advancedResults(Talk), getTalks)
  .post(createTalk)

router.route('/:id').delete(deleteTalk)

router.route('/:talkId/attendees').post(addAttendee)

module.exports = router
