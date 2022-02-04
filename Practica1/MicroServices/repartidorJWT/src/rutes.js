const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');


//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);
//Bearer <Token>
 //End point de Recibir pedido del restaurante
  app.post('/pedidoRestauranteR', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRepartidor', (error, authData)=>{
      if(error){
        console.log('Error al Recibir pedido del restaurante');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se recibo pedido del restaurante');
        res.json({
          mensage: "Pedido de restaurante recibido"
        });
      }
    })
  });

  app.post('/informarEstado', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRepartidor', (error, authData)=>{
      if(error){
        console.log('Error al Informar estado del pedido al cliente');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se informo estado del pedido al cliente');
        res.json({
          mensage: "informo estado del pedido al cliente"
        });
      }
    })
  });

  app.post('/marcarEntregado', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretRepartidor', (error, authData)=>{
      if(error){
        console.log('Error al Marcar como entregado');
         res.json({mensage: "Rol no correspondiente"});
      }else{
        console.log('Se marco como entregado');
        res.json({
          mensage: "Marcar como entregado"
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