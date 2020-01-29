const express = require('express')

const router = express.Router()

const Attendee = require('../models/Attendee')
const { getAttendees, createAttendee } = require('../controllers/Attendees')

const advancedResults = require('../middleware/advancedResults')

router
  .route('/')
  .get(advancedResults(Attendee), getAttendees)
  .post(createAttendee)

module.exports = router
