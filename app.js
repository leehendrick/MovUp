const express = require("express")
const app = express()
const path = require("path")
const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config({path: "./conf.env"})

const publicDirectory = path.join(__dirname, "./public/")
app.use(express.static(publicDirectory))
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//Definindo rotas
app.use("/", require("./routes/pages"))
app.use("/action", require("./routes/action"))

app.listen(3000, () => {
    console.log("[SERVIDOR RODANDO NA PORTA:] 3000")
})