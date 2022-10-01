
const mongoose = require('mongoose')
const { response } = require('express')

mongoose.connect(
  process.env.MONGO_URI || 'mongodb+srv://asperoz_27:rosh2704@cluster0.s1krp.mongodb.net/data?retryWrites=true&w=majority',
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} 
)

module.exports = mongoose

