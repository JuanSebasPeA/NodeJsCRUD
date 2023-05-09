//importing color for the console
const colors = require("colors");
/* importing response from express */
const { response } = require("express");
/* importing the database */
const db = require("../database/db");
const { body } = require("express-validator");

/* creating a conncetion to the database */
const connection = db();

/* this function is to get all the users */
const getUsers = async (req, res = response) => {
  /* creating a query to get all the users */
  const query = "SELECT * FROM usuario";
  connection.query(query, (err, results) => {
    if (err) {
      /* if there is an error, it will be shown in the console */
      console.log(err);
    } else {
      /* if there is not an error, it will be shown the rows in the console */
      console.log(results);
      console.log("Users were obtained successfully".bgMagenta);
      /* it will be shown the rows in the browser */
      res.json(results);
    }
  });
};//end getUsers


/* this function is to create a new user */
const postUsers = async (req, res = response) => {
  /* getting the body of the request */
  const { nombre, email, password, curp } = req.body;
  const role = "USER_ROLE";

  //creating a query to insert a new user
  const query = `INSERT INTO usuario(nombre, email, password, curp, role) VALUES (?, ?, ?, ?, ?)`;

  /* creating an array with the values to insert */
  const values = [nombre, email, password, curp, role];
  console.log(values);

  /* executing the query */
  connection.query(query, values, (err, results) => {
    if (err) {
      /* if there is an error, it will be shown in the console */
      console.log(err);
    }
    /* if there is not an error, it will be shown the rows in the console */
    console.log("User was created successfully".bgYellow);
    /* it will be shown the rows in the browser */
    return res.json(req.body);
  });
};//end postUsers


/* this function is to update the user, but does not allow update the email */
const updateUser = async (req, res = response) => {
  //updating the user
  const { id } = req.params;
  const { nombre, email,  password, curp } = req.body;
  const role = "USER_ROLE";
  //store the values in an array
  const values = [nombre, email, password, curp, role, id];
  //creating the query
  const query = `UPDATE usuario SET nombre = ?, email = ?, password = ?, curp = ?, role = ? WHERE id = ?`;
  //executing the query
  connection.query(query, values, (err, results) => {
    if (err) {
      /* if there is an error, it will be shown in the console */
      console.log(err);
    } else {
      /* if there is not an error, it will be shown the rows in the console */
      console.log("User was updated successfully".bgGreen);
      /* it will be shown the rows in the browser */
      res.json(req.body);
    }
  });
};//end updateUser


const deleteUser = async (req, res) => {
  const {id} = req.params;
  connection.query(`DELETE FROM usuario WHERE id = ${id}`, (err, results) => {
    if (err) {
      /* if there is an error, it will be shown in the console */
      console.log(err);
    } else {
      /* if there is not an error, it will be shown the rows in the console */
      console.log("User was deleted successfully".bgRed);
      /* it will be shown the rows in the browser */
      res.json(results);
    }
  });
}; //end deleteUser


/* exporting userController */
module.exports = {
  getUsers,
  postUsers,
  updateUser,
  deleteUser,
};
