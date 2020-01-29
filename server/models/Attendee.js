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

// Cascade delete attendee from talkAttendee when a attendee is deleted
attendeeSchema.pre('remove', async function(next) {
  console.log(`Attendee being removed from post ${this._id}`)
  await this.model('TalkAttendee').deleteMany({ attendee: this._id })
  next()
})

module.exports = mongoose.model('Attendee', attendeeSchema)
