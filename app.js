const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require ("dotenv/config")

const app = express();

app.use(bodyParser.json())
//Import routes
const postsRoute = require("./routes/posts")

//Middlewares
app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res)=>{
  res.send("Home yeah baby");
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  },()=>{
  console.log("Connected to db")
})
//How do we start listening

app.listen(5004);