require("dotenv").config();

const express = require("express");


const servidor = express();

if(process.env.LOCAL){ //Funciona si ponemos LOCAL=true
    servidor.use(express.static("./pruebas"));
}



servidor.listen(process.env.PORT);