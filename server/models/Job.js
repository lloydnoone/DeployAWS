const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  jobBoardId: { type: String, required: true }
})

module.exports = mongoose.model('Job', jobSchema)