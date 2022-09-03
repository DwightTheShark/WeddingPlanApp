const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dateSubmitted: {
    type: String,
    required: false,
  },
  dateDue: {
    type: String,
    required: false,
  },
  //mdcv: Added priority field in the database to store the priority string from the dropdown menu
  category: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
