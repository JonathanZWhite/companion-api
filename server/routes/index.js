var express =               require('express');
var router =                express.Router();

module.exports = function(app) {
    app.use('/api', router);
    require('./api')(app, router);
};
