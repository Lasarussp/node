//const fs = require('fs');

//const quote = "No beauty shine brighter then that of a good heart !!!";
//fs.writeFile("./awesome.html",quote,(err) =>{
//console.log("completed writing!!!");
//});

//const quote2 = "Live more, worry less";

//for (let i=1;i<=10;i++) {
 //fs.writeFile(`./backup/text-${i}.html`,quote2,(err) =>{
 //console.log("completed writing!!!");
 //});
//}


//const [, , noOffiles] = process.argv;
//console.log(noOffiles);

//const quote2 = "Live more, worry less";

//for (let i=1;i<=noOffiles;i++) {
// fs.writeFile(`./backup/text-${i}.html`,quote2,(err) =>{
// console.log("completed writing!!!");
// });
//}

//fs.readFile("./cool.txt","utf-8",(err,data) => {
 //  if(err) {
 //   console.log("❌",err);
//   }
//   else{
//    console.log(data);
 //  }
//})

const quote3 = "Dream without fear,love without limits ❤"

fs.appendFile("./fun.html","\n" +_quote3,(err) =>{
console.log("completed writing!!!");
});

fs.unlink("./delete-me.css", err => {
    if(err) {
        console.log("❌",err);
    }
    else {
        console.log("completed deleting!!")
    }
})