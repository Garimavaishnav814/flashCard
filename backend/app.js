const express=require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

const user=require("./routs/userRoute")
const flipQuestion=require("./routs/flipQuestionRoute")
app.use("/api/v1",user)
app.use("/api/v1",flipQuestion)
module.exports=app;
