const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');


//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);


  app.post('/Login', async function(req, res){
    var tipo = req.headers['tipo'];
    var secretKey = '';
    const user = {
      id: 1,
      nombre: "sis",
      email: "sis@gmail.com"
    } 
    switch (tipo) {
      case '1':
        secretKey = 'secretClient';
        break;

      case '2':
        secretKey = 'secretRestaurant';
        break;
      
      case '3':
        secretKey = 'secretRepartidor';
       break;
    
      default:
        break;
    }
    jwt.sign({user: user}, secretKey, (err,token) =>{
      res.json({
        token: token
      });
    });

  });



module.exports = app;