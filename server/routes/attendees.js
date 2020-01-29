const express = require('express')

const router = express.Router()

const Attendee = require('../models/Attendee')
const {
  getAttendees,
  createAttendee,
  deleteAttendee
} = require('../controllers/Attendees')

const advancedResults = require('../middleware/advancedResults')

router
  .route('/')
  .get(advancedResults(Attendee), getAttendees)
  .post(createAttendee)

router.route('/:id').delete(deleteAttendee)

module.exports = router
