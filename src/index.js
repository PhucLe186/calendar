const express = require("express");
const app = express();
const routes= require('./routes')
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes)

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


app.listen(3000, () => {
  console.log(`The server is running successfully at: http://localhost:${PORT}/api` );
});