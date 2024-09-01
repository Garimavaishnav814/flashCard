const FlipQuestion=require("../model/flipQuestionModels");

// post====>
exports.flipQuestionCreate=(async (req, res) => {
  try {
    console.log(req.body)
    const saveFlipQuestionData = await FlipQuestion.create(req.body)
    console.log("save question", saveFlipQuestionData)
    res.send(saveFlipQuestionData);
  } catch (error) {
    console.log(error)
    res.send(error)
  }
});

// get============>
exports.getFlipQuestions=(async (req, res) => {
  console.log(req.user)
  try {
    const allQuestions = await FlipQuestion.find()
    res.send(allQuestions);
  } catch (error) {
    res.send(error)
    console.log(error)
  }

});


// get=======>
exports.flipSingleQuestionData=(async(req,res) => {
  try {
    console.log(req.query)
    const singleQuestion= await FlipQuestion.findById(req.query.id)
    res.send(singleQuestion);
  } catch (error) {
    res.send(error)
    console.log(error)
  }

});


// put================>
exports.questionUpdateById=(async (req, res) => {
  try {
    const update = await FlipQuestion.findByIdAndUpdate(req.params.id, req.body)
    res.send({ result: "updated successfully" })
  } catch (error) {
    res.send(error)
    console.log(error)
  }

})


// delete=========>
exports.questionDelete=(async (req, res) => {
  try {
    const deleteQuestion = await FlipQuestion.findByIdAndDelete(req.params.id)
    res.send({ deleteQuestion })
    console.log("delete question")
  } catch (error) {
    res.send(error)
    console.log(error)
  }

})