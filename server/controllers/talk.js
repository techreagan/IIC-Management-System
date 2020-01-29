const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Talk = require('../models/Talk')

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
