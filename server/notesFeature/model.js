const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const notesSchema = new Schema({
  code: { type: Number },
  technology: { type: String },
  description: { type: String },
  fileLocation: { type: String },
  comments: { type: String },
  urls: { type: String }
});
notesSchema.plugin(AutoIncrement, { inc_field: 'uid' });

module.exports = mongoose.model('Notes', notesSchema);
