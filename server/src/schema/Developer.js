const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
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
  preferredTopics: [{
    name: Schema.Types.String,
    rating: Schema.Types.Number
  }],
  preferredLanguages: [Schema.Types.String],
  school: {
    type: Schema.Types.String,
    required: true
  },
  level: {
    type: Schema.Types.String,
    required: false
  },
  adminNotes: {
    type: Schema.Types.String,
    required: false
  },
  adminWorkRating: {
    type: Schema.Types.Number,
    required: false
  },
  adminCommRating: {
    type: Schema.Types.Number,
    required: false
  }
});

DeveloperSchema.statics.create = function(obj) {
  const Developer = mongoose.model("Developer", DeveloperSchema);
  const developer = new Developer();
  developer.name = obj.name;
  developer.email = obj.email;
  developer.technologies = obj.technologies;
  developer.projects = obj.projects;
  if (obj.resume) {developer.resume = obj.resume};
  developer.availability = obj.availability;
  developer.topLanguage = obj.topLanguage;
  developer.timeCommitment = obj.timeCommitment;
  developer.preferredTopics = obj.preferredTopics;
  developer.preferredLanguages = obj.preferredLanguages;
  developer.school = obj.school;
  if (obj.level) {developer.level = obj.level};
  if (obj.adminNotes) {developer.adminNotes = obj.adminNotes};
  if (obj.adminWorkRating) {developer.adminWorkRating = obj.adminWorkRating};
  if (obj.adminCommRating) {developer.adminCommRating = obj.adminCommRating};
  return developer;
}

DeveloperSchema.statics.validate = function(obj) {
  // TODO: MAKE THIS DO STUFF
  // return [false, 'You did a bad thing']
  return [true, null]
}

module.exports = mongoose.model("Developer", DeveloperSchema);