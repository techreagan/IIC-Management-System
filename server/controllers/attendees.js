const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Attendee = require('../models/Attendee')

// @desc    Get all Attendees
// @route   GET /api/v1/Attendees
// @access  Public
exports.getAttendees = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc    Create Attendee
// @route   POST /api/v1/attendees
// @access  Public
exports.createAttendee = asyncHandler(async (req, res, next) => {
  const attendee = await Attendee.create(req.body)

  res.status(200).json({ success: true, data: attendee })
})

// @desc    Delete Attendee
// @route   DELETE /api/v1/attendees/:id
// @access  Public
exports.deleteAttendee = asyncHandler(async (req, res, next) => {
  const id = req.params.id

  const attendee = await Attendee.findById(id)

  if (!attendee) {
    return next(new ErrorResponse(`Attendee with id of ${id} not found`, 404))
  }

  attendee.remove()

  res.status(200).json({ success: true, data: {} })
})
