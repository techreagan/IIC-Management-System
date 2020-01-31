const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/.env' })

const Talk = require('./models/Talk')
const Attendee = require('./models/Attendee')
const TalkAttendee = require('./models/TalkAttendee')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

const talks = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/talks.json`, 'utf-8')
)
const attendees = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/attendees.json`, 'utf-8')
)

const importData = async () => {
  try {
    await Talk.create(talks)
    await Attendee.create(attendees)

    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

const deleteData = async () => {
  try {
    await Talk.deleteMany()
    await Attendee.deleteMany()
    await TalkAttendee.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  // node seeder -i
  importData()
} else if (process.argv[2] === '-d') {
  // node seeder -d
  deleteData()
}
