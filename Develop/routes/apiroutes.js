const router = require("express").Router()
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

router.get("/notes", (request, response)=>{
    // response.send("hello world")

    readFileAsync('./db/db.json', 'utf8').then((dbFile) => {

        console.log(JSON.parse(dbFile))

        response.send(JSON.parse(dbFile));
    })


});

router.post("/notes", (request, response)=>{

});

router.delete("/notes/:id", (request, response)=>{
 
    });



module.exports = router;