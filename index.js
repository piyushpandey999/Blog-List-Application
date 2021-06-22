const { text } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Blog = require("./Modals/blog");
const blogroutes = require("./Routes/blogroute");
// set view engines
app.set("view engine", "ejs");

//Mongo db

const dbURI =
  "mongodb+srv://dbUser:dbUser@cluster0.zazgs.mongodb.net/Nodedb?retryWrites=true&w=majority";

//connect to mongo db

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(4000, () => {
      console.log("server starts and connected to database");
    })
  )
  .catch((err) => console.log(err));

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//routing
app.use(blogroutes);
