const totalvoice = require('totalvoice-node');
const client = new totalvoice("7f9caf876e1ce0cd9485ed26742a94c6");

exports.sendSMS = (numero, mensagem) => {
    client.sms.enviar(numero, mensagem)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });
}
