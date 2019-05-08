const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

const path = __dirname + '/views/';

app.use("/",router);

router.use(function (req,res,next) {
  // console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });

app.get("/first_page", function (req, res){
    res.sendFile(path + "first_page.html")
});

app.get("/school_search", function (req, res){
    res.sendFile(path + "school_search.html")
});

app.get("/school_digger_response", function(req, res){
    res.sendFile(path + "school_digger_response.html")
});

const server=app.listen(port,function() {
console.log("app running on port 8080");
});

// app.listen(9000, function () {
//   console.log('Example app listening on port 9000!')
// })
