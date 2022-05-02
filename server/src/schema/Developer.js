const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true
  },
  languages: [{
    name: Schema.Types.String,
    rating: Schema.Types.Number
  }],
// Example of array
//   rsvp: [{
//     type: Schema.Types.ObjectId,
//     ref: "Event",
//     required: true
//   }]
});

DeveloperSchema.statics.create = function(obj) {
  const Developer = mongoose.model("Developer", DeveloperSchema);
  const developer = new User();
  developer.email = obj.email;
  return developer;
}

module.exports = mongoose.model("Developer", DeveloperSchema);