const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const campaignSchema = new Schema({
  title: String,
  description: String,
  price: String,
  photoURL: String,
  city: String,
  refCreatorId: String,
  refCreatorName: String,
  refPatientId: String,
  isCompleted: Boolean,
  isGoingToWaitName: String,
  isGoingToWaitId: String,
  isRequest: Boolean,
  lat: Number,
  log: Number

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);
module.exports = Campaign;
