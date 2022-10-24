var express = require('express')
var app = express()

// Router-level middleware
// Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
var router = express.Router()

// Load router-level middleware by using the router.use() and router.METHOD() functions.

// The following example code replicates the middleware system that is shown above for application-level middleware,
// by using router-level middleware:

// 1. a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// 2. a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

// 3. a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    // otherwise pass control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // render a regular page
    res.render('regular')
})

// 4. handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.render('special')
})


/**
 * 5. To skip the rest of the router’s middleware functions, call next('router') to pass control back out of the router instance. / 将控制权交回给路由实例
 * This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
 */
router.use(function (req, res, next) {
    // predicate the router with a check and bail out when needed
    if (!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id', function (req, res) {
    res.send('hello, user!')
})



// mount the router on the app
app.use('/', router)
