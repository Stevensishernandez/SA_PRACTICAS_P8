# Practica 1

## _End Point's Login_

- localhost:3001/Login 
- - Headers:
- - - Key: tipo
- -  - Value: {1|2|3} 
-  - - - 1: CLIENTE
-  - - - 2: Restaurante
-  - - - 3: Repartidos

## _End Point's Cliente_

> localhost:3002/getPedido
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3002/verificarRestaurante
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3002/verificarRepartidor
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 

## _End Point's Restaurante_

> localhost:3003/recibirPedido
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3003/informarPedido
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3003/avisarRepartidor
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
 ## _End Point's Repartidor_

> localhost:3004/pedidoRestauranteR
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3004/informarEstado
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token> 
 
> localhost:3004/marcarEntregado
 - Headers:
 - - Key: authorization
 -  - Value: Bearer <token>