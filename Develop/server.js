const express = require("express");
const htmlroutes = require("./routes/htmlroutes")
const apiroutes = require("./routes/apiroutes")
const app = express()
app.use("/api", apiroutes)
app.use("/", htmlroutes)
app.listen(3001, () =>{
console.log("hello");
})