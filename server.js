var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://owner:Taaz7eem@eg-mongodb.bucknell.edu/ala021");

var imageSchema = new mongoose.Schema({
    src: String,
    width: Number,
    height: Number,
    alt: String,
    type: String,
    tags: String
});

var videoSchema = new mongoose.Schema({
    src: String,
    width: Number,
    height: Number,
    type: String,
    content: String,
    tags: String
})

 // var nameSchema = new mongoose.Schema({
 //     firstName: String,
 //     lastName: String
 // });

//var User = mongoose.model("User", nameSchema);
var Image = mongoose.model("Image", imageSchema);
var Video = mongoose.model("Video", videoSchema);

 // var path = require('path');
 // var filePath = "./public/index.html"
 // var resolvedPath = path.resolve(filePath);
 // console.log(resolvedPath);
 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// app.post("/addname", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//         .then(item => {
//             res.send("Name saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to database");
//         });
// });

app.post("/addimage", (req, res) => {
    var myData = new Image(req.body);
    myData.save()
        // .then(item => {
        //     res.send("Name saved to database");
        // })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.post("/addvideo", (req, res) => {
    var myData = new Video(req.body);
    myData.save()
        // .then(item => {
        //     res.send("Name saved to database");
        // })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});