/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

function validate(request, scopes, schema) {
    // security stuff here
    return true;
}

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
    logging: {
        format: 'combined',
        errorLimit: 400
    },
    openApiValidator: {

        validateSecurity: {
            handlers: {
                petstore_auth: validate,
                api_key: validate
            }
        }
    }
}; 


var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/petstore.yaml'), options);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
