const mongoose = require('mongoose');

const { Schema } = mongoose;

const resumeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    default: 0
  }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
