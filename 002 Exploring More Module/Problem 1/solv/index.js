import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // Save user query in "queries.txt"
      const queryData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      fs.appendFile("queries.txt", queryData, (err) => {
        if (err) {
          console.error("Error saving query:", err);
        } else {
          console.log("Query saved to queries.txt");
        }
      });

      // Send confirmation email using Nodemailer
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query Confirmation",
        text: "Thank you for your query! We have received your message.",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
          // Emit "mailSent" event upon successful email delivery
          customEvent.mailSent(email);
        }
      });

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
