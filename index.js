// const fs = require("fs");


// change type:"module" in package.json to use import statement
// import generate from "sillyname";
// const silly = require("sillyname");


// Write into file using fs=>file system
// fs.writeFile("message.txt", "fuck you",(err)=>{
//     if(err) throw err;
//     console.log("yeah");
// });\


// read and print file
// fs.readFile("./message.txt",'utf8',(err,data)=>{
// if(err) throw err;
// console.log(data);
// })


// generating superhero names
// import gen from "superheroes";
// let s = gen.random();
// console.log(s);


import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from'fs';
inquirer
  .prompt([
    {
        message:"please enter the url to generate qr-code",
        name:"url"
    }
  ])
  .then((answers) => {
    let url = answers.url;
    var qr_svg = qr.image(url);
    fs.appendFile("message.txt", "     " + url,(err)=>{
            if(err) throw err;
        });
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    // console.log(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Something else went wrong")
    }
  });

