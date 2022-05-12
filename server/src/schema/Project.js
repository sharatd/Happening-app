const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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

ProjectSchema.statics.create = function(obj) {
  const Project = mongoose.model("Project", ProjectSchema);
  const project = new Project();

  project.title = obj.title;
  project.description = obj.description;
  project.technologies = obj.technologies;
  project.topics = obj.topics;
  project.developers = [];
  return project;
}

ProjectSchema.statics.validate = function(obj) {
  // TODO: MAKE THIS DO STUFF
  // return [false, 'You did a bad thing']
  return [true, null]
}

module.exports = mongoose.model("Project", ProjectSchema);
