const app=require("./app");
const db=require("./config/db");
db()
const dotenv=require("dotenv")
dotenv.config({path:"./config/config.env"})

const server=app.listen(5000, () => {
  console.log("garima vaishnav start")
});

console.log("HI server is runing stage");
