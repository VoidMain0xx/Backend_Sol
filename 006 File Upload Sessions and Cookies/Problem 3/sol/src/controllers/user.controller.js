// Please don't change the pre-written code
// Import the necessary modules here
import { users, registerUser, authenticateUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render('user-register')
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render('user-login')
  };
  addUser = (req, res) => {
    // Write your code here
    const status = registerUser(req.body);
    if(status){
      res.render('user-login')
    }

  };
  loginUser = (req, res) => {
    // Write your code here
    const auth = authenticateUser(req.body);
    if(auth){
      res.send({ success: "true", message: "login successful" });
    }else{
      res.send({ success: "false", message: "login failed" })
    }
  };
}
