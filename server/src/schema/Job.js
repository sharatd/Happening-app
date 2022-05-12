const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  technologies: [{
    type: Schema.Types.String,
    required: true
  }],
  topics: [{
    type: Schema.Types.String,
    required: true
  }],
  developers: [{
    type: Schema.Types.ObjectId,
    ref: "Developer",
    required: true
  }],
})

JobSchema.statics.create = function(obj) {
  const Job = mongoose.model("Job", JobSchema);
  const job = new Job();

  job.title = obj.title;
  job.description = obj.description;
  job.technologies = obj.technologies;
  job.topics = obj.topics;
  job.developers = [];
  return job;
}

JobSchema.statics.validate = function(obj) {
  // TODO: MAKE THIS DO STUFF
  // return [false, 'You did a bad thing']
  return [true, null]
}

module.exports = mongoose.model("Job", JobSchema);
