// main.js

import { writeBlog, publishBlog } from './blogActions.js';

const blogFilePath = 'myblog.txt';
const newBlogContent = `
Hello, this is my new blog.
I'm writing about something interesting.
`;

// Write a blog
writeBlog(blogFilePath, newBlogContent);

// Publish and display the written blog
const publishedBlog = publishBlog(blogFilePath);
if (publishedBlog !== null) {
  console.log('\nPublished Blog Content:\n');
  console.log(publishedBlog);
}
