const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

// STARTING PORT SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

// DB CONNECTION
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
})



// 16:00 MIN VIDEO
