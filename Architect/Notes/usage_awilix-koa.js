/**
 * Basic Usage
 */

// ### Add the middleware to your Koa app. ###
const { asClass, asValue, createContainer } = require('awilix')
const { scopePerRequest } = require('awilix-koa')

const container = createContainer()
container.register({
    // Scoped lifetime = new instance per request
    // Imagine the TodosService needs a `user`.
    // class TodosService { constructor({ user }) { } }
    todosService: asClass(TodosService).scoped()
})

// Add the middleware, passing it your Awilix container.
// This will attach a scoped container on the context.
app.use(scopePerRequest(container))

// Now you can add request-specific data to the scope.
app.use((ctx, next) => {
    ctx.state.container.register({
        user: asValue(ctx.state.user) // from some authentication middleware..
    })
    return next()
})


// ### Then in your route handlers... ###
const { makeInvoker } = require('awilix-koa')

function makeAPI({ todosService }) {
    return {
        find: ctx => {
            return todosService.find().then(result => {
                ctx.body = result
            })
        }
    }
}

const api = makeInvoker(makeAPI)

// Creates middleware that will invoke `makeAPI`
// for each request, giving you a scoped instance.
router.get('/todos', api('find'))




/**
 * Awesome Usage
 *
 * As of awilix-koa@1.0.0, we ship with koa-router bindings for awilix-router-core! 
 * This is cool because now your routing setup can be streamlined with first-class Awilix support!
 *
 * The Awilix-based router comes in 2 flavors-风格: a builder and ESNext decorators.
 *
 * Please see the 'awilix-router-core' docs for information about the full API.
 */

// routes/todos-api.js - demos the builder pattern
import bodyParser from 'koa-bodyparser'
import { authenticate } from './your-auth-middleware'
import { createController } from 'awilix-koa' // or `awilix-router-core`

const API = ({ todoService }) => ({
    getTodo: async ctx => (ctx.body = await todoService.get(ctx.params.id)),
    createTodo: async ctx =>
        (ctx.body = await todoService.create(ctx.request.body))
})

export default createController(API)
    .prefix('/todos') // Prefix all endpoints with `/todo`
    .before([authenticate()]) // run authentication for all endpoints
    .get('/:id', 'getTodo') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
    .post('', 'createTodo', {
        // Maps `POST /todos` to the `createTodo` function on the returned object from `API`
        before: [bodyParser()] // Runs the bodyParser just for this endpoint
    })


// routes/users-api.js - demos the decorator pattern
import bodyParser from 'koa-bodyparser'
import { authenticate } from './your-auth-middleware'
import { route, GET, POST, before } from 'awilix-koa' // or `awilix-router-core`

@route('/users')
export default class UserAPI {
    constructor({ userService }) {
        this.userService = userService
    }

    @route('/:id')
    @GET()
    @before([authenticate()])
    async getUser(ctx) {
        ctx.body = await this.userService.get(ctx.params.id)
    }

    @POST()
    @before([bodyParser()])
    async createUser(ctx) {
        ctx.body = await this.userService.create(ctx.request.body)
    }
}


// server.js
import Koa from 'koa'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-koa'

const app = new Koa()
const container = createContainer()
    .register({
        userService: asClass( /*...*/ ),
        todoService: asClass( /*...*/ )
    })
app.use(scopePerRequest(container))
// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
app.use(loadControllers('routes/*.js', { cwd: __dirname }))

app.listen(3000)