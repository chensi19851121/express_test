var express  = require('express');

//routes
var router_test = express.Router();

//controllers
var test_controller = require('./test_controller');

router_test.get('/:tid',test_controller.show_info);

//exports
exports.test = router_test;