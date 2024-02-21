// Please don't change the pre-written code
// Import the necessary modules here



import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  //2. taking input from the terminal
  const Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    }

  });

  Interface.question('Enter the Email ', async (email) => {
    var mailId = `${email}`
    // console.log(mailId);

    const mailOptions = {
      Form: 'codingninjas2k16@gmail.com',
      to: email,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
    }
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log("Succes: Email send to " + email)
    } catch (error) {
      console.log(error);
    }
    Interface.close();
  });
}

export default Solution;
