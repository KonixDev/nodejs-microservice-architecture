const express = require("express");
const app = express();
const port = process.env.API_USER_PORT || 3002;

app.listen(port, () => {
  console.log("=----------- API Users =--------");
  console.log(`API User listening on port ${port}`);
  console.log("=---------------------------------");
});

module.exports = app;
