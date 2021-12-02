var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.dbpath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


require('./routes/customer')(app);
require('./routes/service')(app);
require('./routes/servicelisting')(app);
require('./routes/make')(app);


app.listen(process.env.PORT, () => {
  console.log(`Server start running on port ${process.env.PORT}...`)
});