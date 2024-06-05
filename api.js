function obterMensagens() {

    return new Promise(function(resolve, reject) {

        $.ajax({

            url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',

            method: 'GET',

            dataType: 'json',

            success: function(data) {

                resolve(data);

            },

            error: function() {

                reject('Erro ao obter mensagens.');

            }

        });

    });

}



function inserirMensagem(mensagem) {



    /*



    var mensagem = {

            nome: "nome da pessoa", 

            email: "email informado", 

            mensagem: "a mensagem informada"} 



    */



    var inserir = $.ajax({



        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',

        method: 'POST',

        data: JSON.stringify(mensagem),

        dataType: 'json',

        async: false,

        contentType: 'application/json',

    });

}



function validarUsuario(objLoginSenha) {



    //email: admin@admin.com

    //senha: '1234'



    /*



    var objLoginSenha = {

            email: "email informado", 

            senha: "senha informada"} 



    */



    var retorno = false;



    var validacao = $.ajax({

        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/usuarios/validar',

        method: 'POST',

        dataType: 'json',

        async: false,

        headers: {

            'Access-Control-Allow-Origin': '*'

                },

        contentType: 'application/json',

        data: JSON.stringify(objLoginSenha)

    }).fail(function(){

        return retorno;

    });



    validacao.done(function(data) {

        retorno = data;

    });



    return retorno;

      }
