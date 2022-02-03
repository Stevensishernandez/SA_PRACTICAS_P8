const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');


//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);
//Bearer <Token>
 //End point de Recibir pedido del cliente
  app.post('/recibirPedido', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRestaurant', (error, authData)=>{
      if(error){
         res.json({mensage: "Rol no correspondiente"});
      }else{
        res.json({
          mensage: "Pedido recibido"
        });
      }
    })
  });

  function verifyToken(req, res, next) {
      const bearHeader = req.headers['authorization'];

      if (typeof bearHeader != 'undefined') {
          var bearHeaderToken = bearHeader.split(" ")[1];
          req.token = bearHeaderToken;
          next(); 
      }else{
        res.sendStatus(403);
      }
  }



module.exports = app;