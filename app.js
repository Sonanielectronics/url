const https = require("https");
const fs = require("fs");

var path = require("path");

var express = require("express");
var app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{

const url = req.body.url;

https.get(url, (res) => {
   var filename = path.basename(url);
   const writeStream = fs.createWriteStream(filename);

   res.pipe(writeStream);

   writeStream.on("finish", () => {
      writeStream.close();
      console.log("Download Completed!");
   })
})

res.send("video download");

})

app.listen(3000, () => {
    console.log("server run");
});
