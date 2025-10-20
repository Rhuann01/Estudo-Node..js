// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();
//require("./modules/path");
//require("./modules/fs");
//require("./modules/https");
require("./modules/express");
//const person = new Person("Felix");

connectToDatabase()
