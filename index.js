const express = require("express");
const handlebars = require("express-handlebars");
const task1Router = require("./routes/task1Route");
const task2Router = require("./routes/task2Route");

const port = 5000 || process.env.PORT;

const app = express();

//Static file
app.use(express.static(__dirname + '/html'));

//Setting handlebars view engine
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + "/views/partials",
    extname: 'hbs',
    defaultLayout: "layout"
}))
app.set("view engine", "hbs");

app.use("/task1", task1Router);
app.use("/task2", task2Router);
app.use("/task3", require("./routes/task3Route"));
app.use("/task4", require("./routes/task4Route"));

app.get("/", (req, res) => {
    return res.render("index");
});



app.listen(port, () => console.log(`Server is running on PORT ${port}`));