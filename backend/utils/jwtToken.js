const jwt = require("jsonwebtoken")
const sendToken = (user, statusCode, res) => {
  const userToken=jwt.sign({ id: 1 }, "hasdgjhgsahdv", {
    expiresIn: "2d"
});
  console.log("sendToken")
    const Token = userToken
    console.log(Token,user,"send token")
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res
      .status(statusCode)
      // .cookie("token", Token, options)
      .json({ success: true, user, Token });
  };
  module.exports = sendToken;