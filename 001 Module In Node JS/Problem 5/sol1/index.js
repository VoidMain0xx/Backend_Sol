// Please don't change the pre-written code
// Import the necessary modules here
 //1. import Filesystem module 
 const fs = require("fs");


const Solution = () => {
  // Write your code here
 
  //2.writing an additional note dynamically

  fs.writeFileSync("notes.txt", "The world has enough coders ");

  const contents = fs.readFileSync("notes.txt", "utf8");
  console.log(contents);

  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");

  const updatedContents = fs.readFileSync("notes.txt", "utf8");
  console.log(updatedContents);

  fs.unlinkSync("notes.txt");

};
Solution();
module.exports = Solution;
