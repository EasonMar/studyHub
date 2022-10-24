/** 
 * Error-handling middleware
 * 
 * Error-handling middleware always takes four arguments. 
 * You must provide four arguments to identify it as an error-handling middleware function. 
 * Even if you don’t need to use the next object, you must specify it to maintain the signature. 
 * Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
 * 
 * Define error-handling middleware functions in the same way as other middleware functions, 
 * except with four arguments instead of three, specifically with the signature (err, req, res, next)):
*/
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


/** 
 * Built-in middleware
 * Starting with version 4.x, Express no longer depends on Connect. 
 * The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

 * Express has the following built-in middleware functions:
 * express.static serves static assets such as HTML files, images, and so on.
 * express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
 * express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
 */


/** 
 * Third-party middleware
 * Use third-party middleware to add functionality to Express apps.
 * 
 * Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.
 * 
 * The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.
 */
// $ npm install cookie-parser
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())