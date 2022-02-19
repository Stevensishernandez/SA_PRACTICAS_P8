const mysql = require('mysql');
const uuid = require('uuid');
const Router = require("express");
const app = Router();
const aws_keys = require('./users');
const jwt = require('jsonwebtoken');
const {User} = require('../models/User');
const {ListUser} = require('../models/ListUser');
const {Menu} = require('../models/Menu');
const {ListMenu} = require('../models/ListMenu');
const {ListPedidos} = require('../models/ListPedidos');

//MySQL base de datos
var connection = mysql.createPool(aws_keys.db_credentials);
var lu = new ListUser();
var lm = new ListMenu();
var lp = new ListPedidos();

//Bearer <Token>
 //End point de Solicitar pedid+o al restaurante (recibo como token un usuario
  app.post('/getPedido', verifyToken, async function(req, res){
      var username = req.headers['username'];
      var pass = req.headers['pass'];
      var menu = req.headers['menu'];

      jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se solicito pedido al restaurante');
         res.json({mensage: "Rol no correspondiente"});

      }else{
        console.log('Se solicito pedido al restaurante');

          if( lu.getUser(username,pass) != null && lm.getMenu(menu) != null ){
            console.log("el usuario " + username + " ha pedido " + lm.getMenu(menu).descripcion + " en restaurante " + lm.getMenu(menu).resturante )
          }
          lp.insert(username,menu,0);
        res.json({
          mensage: "Pedido devulto", total: lm.getMenu(menu).precio, descripcion : lm.getMenu(menu).descripcion
        });
      }
    })
  });

  app.post('/verificarRestaurante', verifyToken, async function(req, res){
      var username = req.headers['username'];
      jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se verifico el pedido al restaurante');
         res.json({mensage: "Rol no correspondiente"});
         
      }else{
        console.log('Se verifico el pedido al restaurante');
        console.log('Se envio al usuario la lista de sus pedidos y estados');
        res.json({
          mensage: "Se verifico el pedido al restaurante",
            estados : lp.getPedido(username)
        });
      }
    })
  });

  app.post('/verificarRepartidor', verifyToken, async function(req, res){
      var username = req.headers['username'];
      jwt.verify(req.token, 'secretClient', (error, authData)=>{
      if(error){
        console.log('Error cuando se verifico el pedido al Repartidos');
         res.json({mensage: "Rol no correspondiente"});
         
      }else{
        console.log('Se verifico el pedido al Repartidor');
        console.log('Se envio al usuario la lista de sus pedidos y estados');
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
