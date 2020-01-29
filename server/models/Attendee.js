const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendeeSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add speaker email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid speaker email'
      ]
    },
    fullName: {
      type: String,
      required: [true, 'Please add speaker full name']
    },
    company: {
      type: String,
      required: [true, 'Please add speaker company']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Attendee', attendeeSchema)
