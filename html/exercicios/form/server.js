const express = require('express')
const app = express()
//const bodyParser = require('body-parser') //Codigo depreciado | ver use(express) linha 6

// app.use(bodyParser.urlencoded({ extended: true })) //Codigo depreciado
app.use(express.urlencoded({ extended: true }))

app.post("/usuarios", (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns!</h1>')
})

app.listen(3003)