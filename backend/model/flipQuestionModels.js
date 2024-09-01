const mongoose = require("mongoose");

const FlipQuestionSchema = new mongoose.Schema({
  question:{
    type:String,
    required:[true,"please enter Question"]
  },
  answer: {
    type: String,
    required: [true,"please enter Answer"]
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

const FlipQuestion = mongoose.model("FlipQuestion", FlipQuestionSchema);

module.exports = FlipQuestion;