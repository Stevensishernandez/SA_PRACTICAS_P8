const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');


//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);
//Bearer <Token>
 //End point de Solicitar pedido al restaurante
  app.post('/getPedido', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se solicito pedido al restaurante');
         res.json({mensage: "Rol no correspondiente"});
         
      }else{
        console.log('Se solicito pedido al restaurante');
        res.json({
          mensage: "Pedido devulto"
        });
      }
    })
  });

  app.post('/verificarRestaurante', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se verifico el pedido al restaurante');
         res.json({mensage: "Rol no correspondiente"});
         
      }else{
        console.log('Se verifico el pedido al restaurante');
        res.json({
          mensage: "Se verifico el pedido al restaurante"
        });
      }
    })
  });

  app.post('/verificarRepartidor', verifyToken, async function(req, res){
    jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se verifico el pedido al Repartidos');
         res.json({mensage: "Rol no correspondiente"});
         
      }else{
        console.log('Se verifico el pedido al Repartidos');
        res.json({
          mensage: "Se verifico el pedido al Repartidos"
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