exports.index = (req, res) => {
    res.render("index");
};

exports.showPets = (req, res) => {
    res.render("pets");
};

exports.showContact = (req, res) => {
    res.render("contact");
};

exports.showCare = (req, res) => {
    res.render("care");
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`Request made to: ${req.url}`);
};

exports.showViolet = (req, res, next) => {
    res.render("violet");
};

exports.showDash = (req, res, next) => {
    res.render("dash");
};

exports.showMali = (req, res, next) => {
    res.render("mali");
};

exports.showViolet = (req, res, next) => {
    res.render("violet");
};

exports.showBo = (req, res, next) => {
    res.render("bo");
};

exports.confirmationPost = (req, res) => {
    res.render("thanks");
};