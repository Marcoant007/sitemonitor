

const nodemailer = require('nodemailer');

const transporter = {
    host: "mail.etaure.com.br",
    port: 587,
    secure: false,
    auth: {
        user: "silas.moraes@etaure.com.br",
        pass: "A5x$fT!X7MWD"
    },
    tls: { rejectUnauthorized: true }

};

const mailOptions = {
    from: '',
    to: '',
    subject: 'E-mail enviado usando Node!',
    html: ''
};


exports.config = {
    transporter: transporter,
    mailOptions: mailOptions
}