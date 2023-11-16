const controller = {};
controller.show = (req, res) => {
    const {emotions} = require("../data");
    res.locals.emotions = emotions;
    return res.render("task1");
}

module.exports = controller;