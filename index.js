const express = require('express');
const app = express();
const porta = 3000;
const path = require('path');

const apiRoute = require('./routes/api')

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));


const portaHeroku = process.env.PORT

app.get("/", (req, res) => {
  res.render('port', {portaHeroku})
})

app.listen(portaHeroku || 3000, () => {
  console.log("Server running on port: ", portaHeroku)
})
