var jwt = require('jsonwebtoken');
var config = require('../config');

function verificarToken(request, response, next){

    let token = request.headers['x-acess-token'];
    if(!token){
        return response.status(403).send({ sucesso : false, motivo: 'Nenhum token informado.'});
    }
    else{
        jwt.verify(token, config.JWT.JWT_SECRET, function(err, decodificado){
            if(err){
                return response.status(500).send({ sucesso: false, motivo: 'Token inválido'});
            }
            else{
                request.idUsuario = decodificado.id;
                next();
            }
        });
    }
}

module.exports = verificarToken;