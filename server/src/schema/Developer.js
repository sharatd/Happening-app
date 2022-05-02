const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true
  },
  technologies: [{
    name: Schema.Types.String,
    rating: Schema.Types.Number
  }],
  projects: [{
    name: Schema.Types.String,
    description: Schema.Types.String
  }],
  resume: {
    type: Schema.Types.String,
    required: false
  },
  availability: {
    type: Schema.Types.Boolean,
    required: true
  },
  topLanguage: {
    type: Schema.Types.String,
    required: true
  },
  timeCommitment: {
    type: Schema.Types.Number,
    required: true
  },
  preferredTopics: [Schema.Types.String],
  preferredLanguages: [Schema.Types.String],
  school: {
    type: Schema.Types.String,
    required: true
  }
});

DeveloperSchema.statics.create = function(obj) {
  const Developer = mongoose.model("Developer", DeveloperSchema);
  const developer = new Developer();
  developer.email = obj.email;
  developer.technologies = obj.technologies;
  developer.projects = obj.projects;
  developer.resume = obj.resume;
  developer.availability = obj.availability;
  developer.topLanguage = obj.topLanguage;
  developer.timeCommitment = obj.timeCommitment;
  developer.preferredTopics = obj.preferredTopics;
  developer.preferredLanguages = obj.preferredLanguages;
  developer.school = obj.school;
  return developer;
}

DeveloperSchema.statics.validate = function(obj) {
  // TODO: MAKE THIS DO STUFF
  // return [false, 'You did a bad thing']
  return [true, null]
}

module.exports = mongoose.model("Developer", DeveloperSchema);