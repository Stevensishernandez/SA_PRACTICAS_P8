const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');
const {User} = require('../models/User');
const {ListUser} = require('../models/ListUser');

//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);
var lu = new ListUser();

  app.post('/Login', async function(req, res){
    var username = req.headers['username'];
    var pass = req.headers['pass'];
    var secretKey = '';
    console.log("Se recibio el usuario :" + username);
    const user = lu.getUser(username, pass)
    var tipo = user.tipo;

    switch (tipo) {
      case 1:
        console.log("El usuario es tipo" + tipo);
        secretKey = 'secretClient';
        break;

      case 2:
        console.log("El usuario es tipo" + tipo);
        secretKey = 'secretRestaurant';
        break;
      
      case 3:
        console.log("El usuario es tipo" + tipo);
        secretKey = 'secretRepartidor';
       break;
    
      default:
        break;
    }
    jwt.sign({user}, secretKey, (err,token) =>{
      res.json({
        token: token
      });
    });

  });



module.exports = app;
