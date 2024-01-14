const app = require("../app");

app.get("/api-users", (req, res) => {
  res.json("Hello World from API Users!");
});
