const mongoose = require('mongoose')
const url = 'mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'))
db.once('open', function callback() {
    console.log("¡Connected to a MongoDB Database!")
})
module.exports = db
