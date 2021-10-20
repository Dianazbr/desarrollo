const express = require("express")
const parser =  require("body-parser")

const app = express()
const port = process.env.PORT || 8000

app.use(parser.json())

app.get("/",(request,response) => {
  response.status(200).send({
      message:"hola Fabi"
  })  
})

app.post("/cuadrangular",(req,res) => {
    console.log(req.body)
    res.json({
        ok:true,
        partidos:
        {
            Partido1 : [
                "Equipo 1" ,"Equipo 2"
            ],
            Partido2 : [
                "Equipo 3" ,"Equipo 4"   
            ]
        }
    })
})

app.post("/cuadrangular/:partido",(req,res) => {
    let body= req.body
    let partido=req.params.partido
    console.log(body,partido)
    res.json({
        ok:true,
    })
})

app.listen(port,() => console.log(`escuchando por ${port}`))
