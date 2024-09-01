const express=require("express");
const {flipQuestionCreate,getFlipQuestions,flipSingleQuestionData,questionUpdateById,questionDelete}=require("../controllers/flipQuestionController");
const { authCheck } = require("../middleware/authCheck");

const router=express.Router();
router.route("/question").post(authCheck ,flipQuestionCreate).get(getFlipQuestions);
router.route("/questionData").get(authCheck,flipSingleQuestionData);
router.route("/question/:id").put(authCheck,questionUpdateById).delete(authCheck,questionDelete);

module.exports=router;


