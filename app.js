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

const SerpApi = require('google-search-results-nodejs')
let search = new SerpApi.GoogleSearch("01645fb18055f2a547118ad6daf5a376f225acbb1623af71474f3c5cd8515580")

// https://www.npmjs.com/package/google-search-results-nodejs This is website
// https://serpapi.com/ This is website where please create account for get api private key

var express = require("express");
var app = express();

app.get("/",(req,res)=>{

    let result = search.html({
        api_key: "01645fb18055f2a547118ad6daf5a376f225acbb1623af71474f3c5cd8515580",
        q: "Coffee",            // search query
        location: "Austin, TX", // location 
       }, (data) => {
         res.send(data)
       })

})

app.listen(3500);

// var express = require("express");
// var app = express();

// var request = require("request");

// app.get("/",(req,res)=>{

//     request({uri: "https://www.youtube.com/watch?v=Tn2t8eRplJo&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=31"}, 
//     function(error, response, body) {
//     res.send(body)

// });

// })

// app.listen(3500);

// var express = require("express");
// var app = express();

// const rp = require('request-promise');

// app.get("/",(req,res)=>{

//     const url = 'https://www.instagram.com/direct/inbox/';

//     rp(url)
//   .then(function(html){
//     //success!
//     // console.log(html);
//     res.send(html)
//   })
//   .catch(function(err){
//     //handle error
//   });

// })

// app.listen(3500);
