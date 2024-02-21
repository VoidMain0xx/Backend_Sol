// blogActions.js

import fs from 'fs';

const writeBlog = (filePath, blogContent) => {
  try {
    fs.writeFileSync(filePath, blogContent);
    console.log(`Blog saved to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
  }
};

const publishBlog = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
};

export { writeBlog, publishBlog };
