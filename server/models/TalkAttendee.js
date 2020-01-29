const mongoose = require('mongoose')

const Schema = mongoose.Schema

const talkAttendeeSchema = new Schema(
  {
    talk: {
      type: mongoose.Schema.ObjectId,
      ref: 'Talk',
      required: [true, 'Please add talk id']
    },
    attendee: {
      type: mongoose.Schema.ObjectId,
      ref: 'Attendee',
      required: [true, 'Please add attendee id']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('TalkAttendee', talkAttendeeSchema)
