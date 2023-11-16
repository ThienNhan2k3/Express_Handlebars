const controller = {};


controller.show = (req, res) => {
    const {products, categories} = require("../data");
    const productList = req.query.category 
    ? products.filter((product) => product.category === parseInt(req.query.category))
    : products;

    res.render("task3", {
        products: productList,
        categories
    })
}

module.exports = controller;