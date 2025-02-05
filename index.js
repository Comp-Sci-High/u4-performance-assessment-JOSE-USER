const express = require('express')
const app = express()

app.set("view engine","ejs")

const rustBases = {
  rustBases: [
  {
    id:1,
    title: "Best Duo Base",
    content: "This is a 2x2 design",
    Creator: "Stone Build",
    path: "/specific/0",
    hasBunker: false
  },
  {
    id:2,
    title: "Perfect solo/duo base",
    content: "This is a 3x3 in triangle form design",
    Creator: "builder",
    path: "/specific/1",
    hasBunker: false
  },
  {
    id: 3,
    title: "Ultimate Trio Base",
    content: "This is a 4x4 bunker design",
    Creator: "RustMaster",
    path: "/specific/2",
    hasBunker: true,
  },
{
    id: 4,
    title: "Fortified Clan Base",
    content: "A large, multi-story base with high defenses",
    Creator: "BaseArchitect",
    path: "/specific/3",
    hasBunker: true,
},
{
    id: 5,
    title: "Compact Starter Base",
    content: "A small but efficient base for early game",
    Creator: "QuickBuilder",
    path: "/specific/4",
    hasBunker: false
}
]
}
app.use(express.static(__dirname + "/public"))



app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/home.html")
})

// app.get("/specific",(req,res)=>{
//   const data = { title: "Best Rust Base", Build: "2x2", Creator: "BaseBuilder"}
//   res.render("specific.ejs",data)
// })

app.get("/overview", (req,res)=>{
  res.render("overview.ejs", rustBases)
})



app.get("/specific/:id", (req,res)=>{
  const id = req.params.id 
  res.render("specific.ejs", rustBases.rustBases[id])
})




   app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })









  app.listen(3000, () => {
    console.log("Server running")
  })

  app.use((req,res,next)=>{
    res.status(404).send("404 NOT FOUND")
})