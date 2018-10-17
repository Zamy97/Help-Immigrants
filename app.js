var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

app.use("/",router);

router.use(function (req,res,next) {
  console.log("/" + req.method);
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


app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})
