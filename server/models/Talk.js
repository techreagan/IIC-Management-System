const mongoose = require('mongoose')

const Schema = mongoose.Schema

const talkSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add title']
    },
    description: {
      type: String,
      required: [false, 'Please add description']
    },
    date: String,
    time: String,
    speakerEmail: {
      type: String,
      required: [true, 'Please add speaker email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid speaker email'
      ]
    },
    speakerFullName: {
      type: String,
      required: [true, 'Please add speaker full name']
    },
    speakerCompany: {
      type: String,
      required: [true, 'Please add speaker company']
    },
    speakerBio: {
      type: String,
      required: [true, 'Please add speaker bio']
    },
    hall: {
      type: Number,
      required: [true, 'Please add hall number']
    }
  },
  { timestamps: true }
)

// Cascade delete attendee added to talk when a talk is deleted
talkSchema.pre('remove', async function(next) {
  // console.log(`Attendee being removed from post ${this._id}`)
  await this.model('TalkAttendee').deleteMany({ talk: this._id })
  next()
})

module.exports = mongoose.model('Talk', talkSchema)
