const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const app = express();




const db = "mongodb+srv://aditya:T6guNspYropoREX5@mycluster.wkbqc.mongodb.net/HackOut?retryWrites=true&w=majority";


if (db) {
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,

    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);


// PASSPORT MIDDLEWARE
// app.use(passport.initialize());
// app.use(passport.session());


// ROUTES

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));