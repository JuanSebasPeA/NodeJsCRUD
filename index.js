/* using colors to make the console.log more colorful */
const colors = require("colors");
/* setting that belongs expressJs */
const express = require("express");
/* getting and setting the env variables */
require("dotenv").config();

/* creating a server calling the express constant as a function */
const app = express();

/*middleware to read json documents */
app.use(express.json());

/* obtaining the routes */
app.use("/api", require("./routes/users"));

/* listenning the server putting the number of the port and a callback type function */
app.listen(process.env.PORT, () => {
  //<--using enviroment variable
  /* the callback function sends a messagge confirming it was possible conecting to port 5000 */
  console.log(`Conected to port ${process.env.PORT}`.bgBlue);
});
