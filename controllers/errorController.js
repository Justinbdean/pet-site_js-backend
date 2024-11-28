const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
    console.log(error.stack);
    next(error);
};

exports.pageNotFound = (req, res) => {
    let errorCode =  httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render(`error`);
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`Error Occured: ${error.stack}`);
    res.send(`${errorCode} | Our site is having a problem!`);
};