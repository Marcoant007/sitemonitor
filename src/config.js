

const nodemailer = require('nodemailer');

const transporter = {
    host: "mail.etaure.com.br",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: ""
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