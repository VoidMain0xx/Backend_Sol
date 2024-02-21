// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm , renderBlogs , addBlog } from "./src/controllers/blog.controller.js";
import { url } from "inspector";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);


app.use(urlencoded ({ extended: true}))

// Write your code here


app.get('/' , renderBlogs);
app.get('/createblog', renderBlogForm );
app.post('/addBlog' , addBlog);


export default app;
