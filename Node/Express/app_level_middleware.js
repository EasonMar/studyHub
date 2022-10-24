var express = require('express')
var app = express()

// ===========================================================================
// Application-level middleware

/**
 * Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, 
 * where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
 */

// This example shows a middleware function with no mount path. The function is executed every time the app receives a request.
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})


// This example shows a middleware function mounted on the /user/:id path. 
// The function is executed for any type of HTTP request on the /user/:id path.
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

// This example shows a route and its handler function (middleware system). 
// The function handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
    res.send('USER')
})


// Here is an example of loading a series of middleware functions at a mount point, with a mount path. 
// It illustrates a middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.
app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})


/**
 * ===========================================================================
 * Route handlers enable you to define multiple routes for a path. 
 * The example below defines two routes for GET requests to the /user/:id path. 
 * The second route will not cause any problems, but it will never get called because the first route ends the request-response cycle.
 */

// This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
}, function (req, res, next) {
    res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
    res.send(req.params.id)
})


/**
 * ===========================================================================
 * To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route.
 * NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
 */

// This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // send a regular response
    res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
    res.send('special')
})


// =========================================================================== 
// Middleware can also be declared in an array for reusability.

// This example shows an array with a middleware sub-stack that handles GET requests to the /user/:id path
function logOriginalUrl(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

function logMethod(req, res, next) {
    console.log('Request Type:', req.method)
    next()
}

var logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User Info')
})