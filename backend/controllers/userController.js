const User = require("../model/signUpModels");
const sendToken = require("../utils/jwtToken");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const salt=bcrypt.genSaltSync(10)

  // Adminlogin API ==============================>
  
exports.adminLogin=(async (req, res) => {
    try {
      console.log(req.body ,"body")
      if (req.body.password && req.body.email) {
        console.log(req.body)
        const adminCheck=req.body.email==='admin@gmail.com'
        const adminPassCheck=req.body.password==='12345678'
        if (adminCheck && adminPassCheck) {
          const userData= {userName: 'admin',
            email:'admin@gmail.com'
          }
          sendToken(userData,200,res);
        } else {
          res.send({error:"invalid credintion"})
        }
      } else {
        res.send({ result: "please enter your correct i'd and password" })
      }
    } catch (error) {
      res.send(error)
    }
  })