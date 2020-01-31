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

// @desc    Get single talks
// @route   GET /api/v1/talks/:id
// @access  Public
exports.getTalk = asyncHandler(async (req, res, next) => {
  const talk = await Talk.findById(req.params.id)
  if (!talk) {
    return next(
      new ErrorResponse(`Talk with id of ${req.params.talkId} not found`, 404)
    )
  }
  res.status(200).json({ success: true, data: talk })
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
// @desc    Get attendees by talk id
// @route   GET /api/v1/talks/attendees/?_id=dddags454
// @access  Public
exports.getAttendeesByTalkId = asyncHandler(async (req, res, next) => {
  const talkId = req.query.talk

  const talk = await Talk.findById(talkId)

  if (!talk) {
    return next(
      new ErrorResponse(`Talk with id of ${req.params.talkId} not found`, 404)
    )
  }

  // const talkAttendee = await TalkAttendee.find({
  //   talk: talkId
  // }).populate({ path: 'attendees' })

  // res.status(200).json({ success: true, data: talkAttendee })
  res.status(200).json(res.advancedResults)
})

// @desc    Delete Talk
// @route   DELETE /api/v1/talks/:id
// @access  Public
exports.deleteTalk = asyncHandler(async (req, res, next) => {
  const id = req.params.id

  const talk = await Talk.findById(id)

  if (!talk) {
    return next(new ErrorResponse(`Talk with id of ${id} not found`, 404))
  }

  talk.remove()

  res.status(200).json({ success: true, data: {} })
})
