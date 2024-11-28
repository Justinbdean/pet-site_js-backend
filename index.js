"use strict";

const express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    patronsController = require("./controllers/patronController"),
    Patron = require("./models/patron");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://Justin:Christina@it231.hzz9a.mongodb.net/final?retryWrites=true&w=majority&appName=IT231")
    .catch((err) => console.log(err)); 

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB via Mongoose")
});

app.use(layouts);
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
});

app.use(express.urlencoded({
    extended : false,
}));

app.get("/patrons", patronsController.getAllPatrons, (req, res, next) => {
    res.render("patrons", {patrons : req.data});
});

app.get("/", homeController.index);
app.get("/pets", homeController.showPets);
app.get("/care", homeController.showCare);
app.get("/contact", homeController.showContact);
app.get("/violet", homeController.showViolet);
app.get("/dash", homeController.showDash);
app.get("/mali", homeController.showMali);
app.get("/bo", homeController.showBo);

app.get("/contact", homeController.confirmationPost);
app.get("/error", errorController.pageNotFound);

app.post("/signup", patronsController.savePatron);

app.use(errorController.logErrors);
app.use(errorController.pageNotFound);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost: ${
        app.get("port")}`);
});

/* To view all that have signed up for the newsletter go to "/patrons" */