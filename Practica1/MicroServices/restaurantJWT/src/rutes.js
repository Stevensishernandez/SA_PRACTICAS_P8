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
         console.log('Error al recibir el pedido del cliente');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se recibio el pedido del cliente');
        res.json({
          mensage: "Pedido recibido"
        });
      }
    })
  });

  app.post('/informarPedido', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRestaurant', (error, authData)=>{
      if(error){
        console.log('Error al informar estado del pedido al cliente');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se informo estado del pedido al cliente');
        res.json({
          mensage: "Informar estado del pedido al cliente"
        });
      }
    })
  });

  app.post('/avisarRepartidor', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRestaurant', (error, authData)=>{
      if(error){
         console.log('Error al avisar al repartidor que ya esta listo el pedido');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se aviso al repartidor que ya esta listo el pedido');
        res.json({
          mensage: "avisar al repartidor que ya esta listo el pedido"
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