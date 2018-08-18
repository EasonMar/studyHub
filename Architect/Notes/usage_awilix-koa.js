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