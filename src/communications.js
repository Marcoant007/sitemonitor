
const nodemailer = require('nodemailer');
const totalvoice = require('./totalvoice/totalvoice');
const config = require('./config').config;

exports.sendSMS = (telephoneNumber, message) => {
    try {
        totalvoice.sendSMS(telephoneNumber, message);
    } catch (e) {
        console.log('Erro ao tentar enviar SMS');
    }
}

exports.sendEmail = async (mailOptions) => {
    try {

        const transporter = nodemailer.createTransport(config.transporter);

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('erro' + error.message);
            } else {
                console.log('sucesso');
            }
        });
    } catch (error) {
        console.log('erro' + error.message);
    }
}
