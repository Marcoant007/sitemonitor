const express = require('express');
const timer = require('./timer');

const router = express.Router();

var getAll = (req, res) => {
    console.log(req.query.url);

    const site = req.query.url;

    res.send(timer.monitoredSites);
}




var sitesPage = (req, res) => {
    var id = req.params.id;

    //TODO pegar a informação do id e trazer somente os sites com code = id
    res.render('pages/home', {
        data: timer.monitoredSites
    })
}

router.get('/monitore', getAll);
router.get('/', sitesPage);
router.get('/:id', sitesPage);

module.exports.router = router;

