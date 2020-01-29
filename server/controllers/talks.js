const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Talk = require('../models/Talk')
const TalkAttendee = require('../models/TalkAttendee')
const Attendee = require('../models/Attendee')

// @desc    Get all talks
// @route   GET /api/v1/talks
// @access  Public
exports.getTalks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc    Create talk
// @route   POST /api/v1/talks
// @access  Public
exports.createTalk = asyncHandler(async (req, res, next) => {
  const talk = await Talk.create(req.body)

  res.status(200).json({ success: true, data: talk })
})

// @desc    Add attendee
// @route   POST /api/v1/talks/:talkId/attendees/
// @access  Public
exports.addAttendee = asyncHandler(async (req, res, next) => {
  const talkId = req.params.talkId
  const attendeeId = req.body.attendeeId

  const talk = await Talk.findById(talkId)
  if (!talk) {
    return next(
      new ErrorResponse(`Talk with id of ${req.params.talkId} not found`, 404)
    )
  }

  const attendee = await Attendee.findById(attendeeId)
  if (!attendee) {
    return next(
      new ErrorResponse(`Attendee with id of ${attendeeId} not found`, 404)
    )
  }

  const isAttendingTalk = await TalkAttendee.findOne({
    talk: talkId,
    attendee: attendeeId
  })

  if (isAttendingTalk) {
    return next(
      new ErrorResponse(
        `Attendee ${attendee.fullName} already added to talk`,
        400
      )
    )
  }

  const talkAttendee = await TalkAttendee.create({
    talk: talkId,
    attendee: attendeeId
  })

  res.status(200).json({ success: true, data: talkAttendee })
})
