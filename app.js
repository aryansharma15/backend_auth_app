require("dotenv").config()


const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>¡Hola Mundial!");
    
})

module.exports = app;