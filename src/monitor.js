
const fs = require('fs');
const superagent = require('superagent');

const communications = require('./communications');
const config = require('./config').config;

//NOTIFY REALIZA O ENVIO DE EMAIL CASO OS PARAMENTROS SEJAM CHAMADOS.
//mailOptions é onde é armazenado os dados de quem irá receber esse email
async function notify(site) {
    var html = await fs.promises.readFile('./resources/email.html', 'utf8');
    console.log('Notificando administrador');
    var mailOptions = {
        from: config.mailOptions.from,
        to: config.mailOptions.to,
        subject: config.mailOptions.subject,
        html: '',
    };

    mailOptions.html = html;
    mailOptions.html = mailOptions.html.replace("${nome}", site.name);
    mailOptions.html = mailOptions.html.replace("${url}", site.url);

    // TODO promissificar
    communications.sendEmail(mailOptions);
    // TODO promissificar
    communications.sendSMS('', `Site ${site.url} não funcionando.`);
}

var requestUrl = async (site) => {
    try {
        const response = await superagent.get(site.url);
        return response.status;
    } catch (error) {
        return 500;
    }
}

module.exports.requestUrl = requestUrl;
module.exports.notify = notify;
