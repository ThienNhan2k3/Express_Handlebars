const controller = {};

controller.show = (req, res) => {
    const {zodiacs} = require("../data");
    res.render("task4", {
        zodiacs
    })
}

controller.showDetails = (req, res) => {
    const {zodiacs} = require("../data");
    const zodiac = zodiacs.filter(item => item.name == req.params.name)[0];
    console.log(zodiac);
    res.render("task4-detail", zodiac)
}

module.exports = controller;