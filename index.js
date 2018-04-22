let mainRouter = require("./mainRoutes.js");
let express = require('express');
let app = express();
app.use('/',mainRouter);
app.listen(3000);
