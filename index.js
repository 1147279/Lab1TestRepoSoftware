let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mainRouter = require("./mainRoutes.js");
let todoRouter = require("./todoRoutes.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.use("/todo", todoRouter);
app.use('/cdn', express.static('public'));
app.listen(3000);
console.log("Express server running on port 3000");
