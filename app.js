const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/", function(require, respond){
    respond.sendFile(__dirname + "/rate/index.html");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});