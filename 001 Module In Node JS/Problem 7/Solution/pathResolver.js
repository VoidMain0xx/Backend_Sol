const fs = require('fs');
const path = require('path');

const filePath =  path.join("src", "file.txt");

exports.getAbsolutePath = (filePath) => {
  // Write your code here

  const abs = path.resolve("src" , "file.txt");
  return abs;


};
