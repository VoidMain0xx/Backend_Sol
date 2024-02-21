// Import required module

// 1. importing module

// const readline = require('readline');

// // const interface = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// const Solution = () => {
//   // Write your code here

//   const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
 
//   //3.user input and print on console
//       interface.question("Enter the First Number: ", (num1) =>{
//       interface.question("Enter the Second Number: ", (num2)=>{
//         // if(Number(num1) > Number(num2)){
//         //   console.log("The maximum of two Number is: " + Number(num1));
//         //   interface.close();
//         // }else{
//         //   console.log("The maximum of two Number is: " + Number(num2));
//         //   interface.close();
//         // }
//         const maxi = Math.max(Number(num1), Number(num2));
//         console.log(`The maximum of the two numbers is: ${maxi}`);
//         interface.close();
//       });
    
//   });

 
  
// };

// Solution();

// // interface.close();
// module.exports = Solution;
const readline = require("readline");

const Solution = () => {
  // Create a readline interface
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user for input
  qInterface.question("Enter the first number: ", (n1) => {
    qInterface.question("Enter the second number: ", (n2) => {
      const maxi = Math.max(Number(n1), Number(n2));
      console.log(`The maximum of the two numbers is: ${maxi}`);

      qInterface.close();
    });
  });
};

Solution();
module.exports = Solution;