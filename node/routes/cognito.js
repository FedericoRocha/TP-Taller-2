var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var express = require('express');

var cognitoController = require('../controllers/cognitoController');

var router = express.Router();

router.post('/crearcuenta' , cognitoController.crearcuenta);
router.post('/login', cognitoController.login);
module.exports= router;