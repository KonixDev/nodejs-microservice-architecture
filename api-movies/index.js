const express = require("express");
const app = express();
const port = process.env.API_MOVIES_PORT || 3004;
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotEnv.config();

app.use(
  morgan(
    "MOVIES-SERVICE - :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);

//Connect to DB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar con MongoDB', err));

app.listen(port, () => {
  console.log("=----------- API Movies =--------");
  console.log(`API Movies listening on port ${port}`);
  console.log("=---------------------------------");
});

app.use("/", require("./routes/MoviesRouter"));
