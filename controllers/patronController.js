const Patron = require("../models/patron");

exports.getAllPatrons = (req, res, next) => {
    Patron.find({}, (error, patrons) => {
        if(error) next(error);
        req.data = patrons;
        next();
    });
};

exports.getPatronsPage = (req, res) => {
    res.render("contact");
};

exports.savePatron = (req, res) => {
    let newPatron = new Patron ({
        name : req.body.name,
        email : req.body.email,
        animalType : req.body.animalType
    });

    newPatron.save((error, result) => {
        if(error) res.send(error);
        res.render("thanks");
    });
};