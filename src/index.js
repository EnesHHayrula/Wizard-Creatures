const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { PORT } = require("./constants");
const routes = require("./router");

// Init
const app = express();

// Express Configuration
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

// Handlebars Configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${6066}`));
