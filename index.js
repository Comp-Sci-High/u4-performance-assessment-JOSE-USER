const express = require('express')
const app = express()

app.set("view-engine","ejs")

app.use((req,res,next)=>{
    res.status(404).send("404 NOT FOUND")
})


app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/views"))

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/home.html")
})



app.get("/overview", (req,res)=>{
  const data = {GroupSize: 3 , Title: "Mini Igloo" ,
    Difficultytobuild: 6,
    VideoLink: "https://www.youtube.com/watch?v=Ulem2zFaK2E&pp=ygUOdHJpbyBydXN0IGJhc2U%3D" ,}
    res.render("overview.ejs", data)
})




   app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })









  app.listen(3000, () => {
    console.log("Server running")
  })