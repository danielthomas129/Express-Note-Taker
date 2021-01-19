
var path = require("path");

//HMTL Routing:
module.exports = (app) => {
    //* GET `/notes` - Should return the `notes.html` file.
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
    
    //* GET `*` - Should return the `index.html` file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
};