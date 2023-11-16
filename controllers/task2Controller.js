const controller = {};

controller.show = (req, res) => {
    const salary = req.query.salary ? parseFloat(req.query.salary) : 0;
    let jar55 = (salary * 55 / 100).toFixed(2);
    let jar10 = (salary * 10 / 100).toFixed(2);
    let jar5 = (salary * 5 / 100).toFixed(2);

    res.render("task2", {
        salary,
        jar55,
        jar5,
        jar10
    });
}

module.exports = controller;