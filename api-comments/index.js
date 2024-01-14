const express = require("express");
const app = express();
const port = process.env.API_COMMENTS_PORT || 3005;

app.listen(port, () => {
  console.log("=----------- API Comments =--------");
  console.log(`API Comments listening on port ${port}`);
  console.log("=---------------------------------");
});
