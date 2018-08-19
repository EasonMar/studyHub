// This package is intended for use with HTTP libraries 
// that want to configure routes using ESNext decorators or a builder pattern.


/**
 * Route Declaration
 * There are 2 flavors of route declaration: builder and ESNext decorators.
 */


/**
 * Decorators
 *
 * The decorator API exports are:
 */
import {
    route,
    before,
    after,
    verbs,
    HttpVerbs,

    // The following are just shortcuts for `verbs([HttpVerbs..])`
    GET,
    HEAD,
    POST,
    PUT,
    DELETE,
    CONNECT,
    OPTIONS,
    PATCH,
    ALL
} from 'awilix-router-core'

// ### route(path) ###
// Class-level: adds a prefix to all routes in this controller.
// Method-level: adds a route for the decorated method in the controller.
// Has no effect if no verbs are configured.
@route('/todos')
class Controller {
    // GET /todos
    // POST /todos
    @GET()
    @POST()
    method1() {}

    // PATCH /todos/:id
    @route('/:id')
    @PATCH()
    method2() {}
}


// ### before(middlewares) and after(middlewares) ###
// Class-level: adds middleware to run before/after the routes are processed.
// Method-level: adds middleware to run before/after the decorated method is processed.
@before([bodyParser()])
class Controller {
    @before([authenticate()])
    @after([compress()])
    method() {}
}

// ### verbs(httpVerbs) ###
// Class-level: not allowed.
// Method-level: adds HTTP verbs that the route will match.
// Has no effect if no routes are configured. --- 貌似一定要放在routes后面
@verbs([HttpVerbs.GET, HttpVerbs.POST])
method() {}
// Verb shorthands
// GET, POST, etc.
@route('/todos')
class Controller {
    // GET /todos
    // POST /todos
    @GET()
    @POST()
    method1() {}

    // PATCH /todos/:id
    @route('/:id')
    @PATCH()
    method2() {}
}




/**
 * Builder
 *
 * The builder API's public top level exports are:
 */
import { createController, HttpVerbs } from 'awilix-router-core'

// ### createController(targetClassOrFunction) ###
// Creates a controller that will invoke methods on an instance of the specified targetClassOrFunction.

// The controller exposes the following builder methods:
// .get|post|put|patch|delete|head|options|connect|all(path, method, opts): shorthands for .verbs([HttpVerbs.POST], ...) - see HttpVerbs for possible values.
// .verbs(verbs, path, method, opts): registers a path mapping for the specified controller method.
// .prefix(path): registers a prefix for the controller. Calling this multiple times adds multiple prefix options.
// .before(middlewares): registers one or more middlewares that runs before any of the routes are processed.
// .after(middlewares): registers one or more middlewares that runs after the routes are processed.

// The optional opts object passed to .verbs can have the following properties:
// before: one or more middleware that runs before the route handler.
// after: one or more middleware that runs after the route handler.

// Note: all builder methods returns a new builder - this means the builder is immutable! 
// This allows you to have a common builder setup that you can reuse for multiple controllers.

// Demo
// You may re-export these as well.
import { createController } from 'awilix-router-core'

import bodyParser from 'your-framework-body-parser'
import authenticate from 'your-framework-authentication'

// Can use a factory function or a class.
const api = ({ service }) => ({
    find: async() => (ctx.body = await service.doSomethingAsync()),
    get: async(ctx) => (ctx.body = await service.getNewsOrWhateverAsync(ctx.params.id)),
    save: async(ctx) => (ctx.body = await service.saveNews(ctx.params.id, ctx.request.body))
})

export default createController(api)
    .before(bodyParser())
    .prefix('/news')
    .get('', 'find') // <- "find" is the method on the result from `api`
    .get('/:id', 'get') // <- "get" is the method on the result from `api`
    .verbs([HttpVerbs.POST, HttpVerbs.PUT], '/:id', 'save', {
        // "save" is the method on the result from `api`
        before: [authenticate()]
    })