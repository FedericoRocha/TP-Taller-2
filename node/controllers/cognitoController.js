var AmazonCognitoIdentity = require("amazon-cognito-identity-js");


var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
global.fetch = require("node-fetch");
var AWS = require("@aws-sdk/client-s3");
const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regText = /^[a-zA-Z\s]+$/;
const regAdress = /^[A-Za-z0-9\s]+$/g;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
const poolData = {
  UserPoolId : "us-east-1_GFKM2DjVP", // Your user pool id here   
  ClientId : "39gonf6saktk3t43ebp08ilhj5" // Your client id here
}



var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var controller = {
crearcuenta: (req, res) => {
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var direccion = req.body.direccion;
    var password = req.body.password;

    var attributeList = [];
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "given_name",
        Value: nombre,
      })
    );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "family_name",
        Value: apellido,
      })
    );
    attributeList.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: "address",
          Value: direccion,
        })
      );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          return res.status(404).send({
            status: "Error",
            message: "El usuario no pudo registrar" + err,
          });
        } else {
          var cognitoUser = result.user;
          return res.status(200).send({
            status: "Success",
            message:
              "El usuario " +
              cognitoUser.getUsername() +
              " se ha  podido registrar",
          });
        }
      });
    },

    verificar: (req, res) => {
      const { Username, ConfirmationCode } = req.body;
      //agregar validaciones
      // if(Username !== undefined && ConfirmationCode !== undefined){}
    
      var userData = {
        Username: Username,
        Pool: userPool,
      };
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.confirmRegistration(
        ConfirmationCode,
        true,
        function (err, result) {
          if (err) {
            res.status(500).send(err);
            return;
          }
          res.status(200).jsonp(result);
        }
      );
    },

    login: (req, res) => {
      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: req.body.email,
        Password: req.body.password,
      });

      var userData = {
        Username: req.body.email,
        Pool: userPool,
      };
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          console.log("access token + " + result.getAccessToken().getJwtToken());
          console.log("id token + " + result.getIdToken().getJwtToken());
          console.log("refresh token + " + result.getRefreshToken().getToken());
          //respuesta del post, puse para que devuelva el token, hay que ver como traer los datos del usuario
          res.status(200).jsonp(result.getAccessToken().getJwtToken());
        },
        onFailure: function (err) {
          const error = {
            message: err.message,
            code: err.code,
          };
          console.log(error);
          res.status(500).send(error);
        },
      });
    },
    newPasswordRequired: function(userAttributes, requiredAttributes) {
      // User was signed up by an admin and must provide new
      // password and required attributes, if any, to complete
      // authentication.

      // the api doesn't accept this field back
      delete userAttributes.email_verified;

      // store userAttributes on global variable
      sessionUserAttributes = userAttributes;
  }

};



module.exports = controller;
//crearcuenta();