const express = require("express");
const app = express();
const port = process.env.API_THEATHERS_PORT || 3003;

app.listen(port, () => {
  console.log("=----------- API Theathers =--------");
  console.log(`API Theathers listening on port ${port}`);
  console.log("=---------------------------------");
});
