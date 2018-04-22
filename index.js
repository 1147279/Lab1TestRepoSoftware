let mainRouter = require("./mainRoutes.js");
let express = require('express');
let app = express();
app.use('/',mainRouter);
app.listen(process.env.PORT || 3000);
