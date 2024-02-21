const { server } = require("./index");

// Start server on port 5000
server.listen(5000, () => {
  console.log("server is listening at 5000");
});
