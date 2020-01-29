const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/Talk')

// @desc    Get all talks
// @route   GET /api/v1/talks
// @access  Public
exports.getTalks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})
