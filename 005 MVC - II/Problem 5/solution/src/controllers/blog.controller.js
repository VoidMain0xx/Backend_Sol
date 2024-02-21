// Please don't change the pre-written code
// Import the necessary modules here
import path from 'path';
// import blogmodel from '../models/blog.model.js';
import {blogs} from '../models/blog.model.js';
// import blogmodel from '../models/blog.model.js';

export const renderBlogs = (req , res ) => {
  // Write your code here
  res.status(200).render('blogs', {blogs});
};

export const renderBlogForm = (req, res) => {
  // Write your code here
   res.status(200).render('addBlogForm');
};
export const addBlog = (req, res) => {
  // Write your code here
  blogs.push(req.body)
  res.status(201).render('blogs', {blogs});
};
