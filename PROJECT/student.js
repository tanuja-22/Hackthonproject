const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batch: { type: String, required: true },
  academicPerformance: { type: Number, required: true },
  coreEngineeringGrades: [Number],
  hackathonParticipations: [{ name: String, level: String, date: Date }],
  paperPresentations: [{ title: String, conference: String, date: Date }],
  teachingAssistance: [{ course: String, semester: String }],
  overallRank: { type: Number, default: 0 }
});

module.exports = mongoose.model('Student', StudentSchema);