const express = require('express')

const router = express.Router()

const Talk = require('../models/Talk')
const Attendee = require('../models/Attendee')
const TalkAttendee = require('../models/TalkAttendee')
const {
  getTalks,
  getTalk,
  createTalk,
  addAttendee,
  getAttendeesByTalkId,
  deleteTalk
} = require('../controllers/talks')

const advancedResults = require('../middleware/advancedResults')

router
  .route('/')
  .get(advancedResults(Talk), getTalks)
  .post(createTalk)

router
  .route('/attendees')
  .get(advancedResults(TalkAttendee, 'attendee'), getAttendeesByTalkId)

router
  .route('/:id')
  .get(getTalk)
  .delete(deleteTalk)

router
  .route('/:talkId/attendees')

  .post(addAttendee)

module.exports = router
