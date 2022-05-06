let express = require("express");

const app = express();
const morgan = require("morgan");
app.use(express.static("public"));
app.use(morgan("dev"));

const port = process.env.PORT || 8080;

app.use('/api', require('./router'));

app.listen(port, () => {
    console.log(`Smooth sailing out of Port: ${port}`);
  });

  module.exports = app;

