// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method == 'POST') {
    let body = '';
    req.on('data' , (chunks) => {
        body += chunks.toString();
        // fs.appendFileSync('data.txt', body);
        // const fileContents = fs.readFileSync('data.txt', 'utf-8');
        // console.log(fileContents);
    })
    req.on('end', () =>{
        res.end("data is recived");
        fs.appendFileSync('data.txt', body);
        console.log(fs.readFileSync('data.txt', 'utf-8'));
    })
  res.end("data received");
  }
});

export default server;
