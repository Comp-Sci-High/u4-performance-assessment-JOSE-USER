const express = require('express')
const app = express()

app.set("view-engine","ejs")

app.use(express.static(index.js__dirname + "/public"))

app.use((req,res,next)=>{
    res.status(404).send("404 NOT FOUND")
})

app.get("/home",(req,res)=>{
    res.render
})







const groupBases = {
    Group-Size: ,
    Title: ,
    Difficulty-to-build:,
    Video-Link: ,
   }
   

   app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })









  app.listen(3000, () => {
    console.log("Server running")
  })