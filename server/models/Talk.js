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
      required: [true, 'Please add description']
    },
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
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Talk', talkSchema)
