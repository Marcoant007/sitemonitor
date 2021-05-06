const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const expressLayouts = require('express-ejs-layouts')
var path = require('path')

const siteRouter = require('./src/siteRouter');
const timer = require('./src/timer');

const app = express();

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))

app.use(siteRouter.router);


async function main() {
    app.listen(3338, function () {
        console.log('Servidor escutando na porta 3338');
        timer.run();
        timer.registerTimer();
    });
}

main();

module.exports.app = app;