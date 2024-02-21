// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req , res , next) =>{
  var user  = req.body ;
  // console.log(user);
  updateUsers(user);
  res.render("update-form", { user });
}
 