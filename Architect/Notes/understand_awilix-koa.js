/**
 * Why do I need it?
 */
// A totally framework-independent piece of application code.
// Nothing here is remotely associated with HTTP, Koa or anything.
class TodosService {
    constructor({ currentUser, db }) {
        // We depend on the current user!
        this.currentUser = currentUser
        this.db = db
    }

    getTodos() {
        // use your imagination ;)
        return this.db('todos').where('user', this.currentUser.id)
    }
}

// Here's a Koa API that calls the service
class TodoAPI {
    constructor({ todosService }) {
        this.todosService = todosService
    }
    getTodos(ctx) {
        return this.todosService.getTodos().then(todos => ctx.ok(todos))
    }
}

/**
 * So the problem with the above is that the TodosService needs a currentUser for it to function. 
 * Let's first try solving this manually, and then with awilix-koa.
 */


/**
 * Manual --------------------------------------------------
 */

// ### This is how you would have to do it without Awilix at all 
import db from './db'
router.get('/todos', ctx => {
    // We need a new instance for each request, else the currentUser trick wont work.
    const api = new TodoAPI({
        todosService: new TodosService({
            db,
            currentUser: ctx.state.user // current user is request specific.
        })
    })
    return api.getTodos(ctx) // invoke the method.
})



// ### Let's do this with Awilix instead. We'll need a bit of setup code.
import { asValue, createContainer, Lifetime } from 'awilix'
const container = createContainer()

// The `TodosService` lives in services/TodosService
container.loadModules(['services/*.js'], {
    formatName: 'camelCase', // we want `TodosService` to be registered as `todosService`.
    resolverOptions: {
        lifetime: Lifetime.SCOPED // We want instances to be scoped to the Koa request. We need to set that up.
    }
})

// imagination is a wonderful thing.
app.use(someAuthenticationMethod())

// We need a middleware to create a scope per request.
// Hint: that's the scopePerRequest middleware in `awilix-koa` ;)
app.use((ctx, next) => {
    ctx.state.container = container.createScope() // We want a new scope for each request!
    // The `TodosService` needs `currentUser` --- 这里给容器注册了currentUser,这样TodoServcie实例化时能从构造函数参数里拿到了
    ctx.state.container.register({
        currentUser: asValue(ctx.state.user) // from auth middleware.. IMAGINATION!! :D
    })
    // 感觉是所有依赖都放到了containers里面，然后把container绑到所有的构造函数或者工厂模式里面, 然后各构造函数/工厂可以通过对象解构获取他们自己想要的东西
    return next()
})


// ### Okay! Let's try setting up that API again! ###
export default function(router) {
    router.get('/todos', ctx => {
        // We have our scope available!
        const api = new TodoAPI(ctx.state.container.cradle) // Awilix magic!   感觉这个container.cradle就是所有依赖实例所在地
        return api.getTodos(ctx)
    })
}


//###A lot cleaner, but we can make this even shorter! ###
export default function(router) {
    // Just invoke `api` with the method name and you've got yourself a middleware that instantiates the API and calls the method.
    const api = methodName => {
        // create our handler
        return function(ctx) {
            const controller = new TodoAPI(ctx.state.container.cradle)
            return controller[method](ctx)
        }
    }

    // adding more routes is way easier! ---- Well Done!
    router.get('/todos', api('getTodos'))
}



/**
 * Using awilix-koa
 */

// ### In our route handler, do the following: ### 
import { makeInvoker } from 'awilix-koa'
export default function(router) {
    const api = makeInvoker(TodoAPI)
    router.get('/todos', api('getTodos'))
}

// ### And in your Koa application setup: ### 
import { asValue, createContainer, Lifetime } from 'awilix'
import { scopePerRequest } from 'awilix-koa'
const container = createContainer()

// The `TodosService` lives in services/TodosService
container.loadModules(
    [
        ['services/*.js', Lifetime.SCOPED] // shortcut to make all services scoped
    ], {
        // we want `TodosService` to be registered as `todosService`.
        formatName: 'camelCase'
    }
)

// imagination is a wonderful thing.
app.use(someAuthenticationMethod())

// Woah!
app.use(scopePerRequest(container))
app.use((ctx, next) => {
    // We still want to register the user!
    // ctx.state.container is a scope!
    ctx.state.container.register({
        currentUser: asValue(ctx.state.user) // from auth middleware.. IMAGINATION!! :D
    })
})

// ### Now that is way simpler! ###
import { makeInvoker } from 'awilix-koa'
function makeTodoAPI({ todosService }) {
    return {
        getTodos: ctx => {
            return todosService.getTodos().then(todos => ctx.ok(todos))
        }
    }
}

export default function(router) {
    const api = makeInvoker(makeTodoAPI) // 需要了解makeInvoker的原理 --- 不太容易，先了解他们的用法
    router.get('/api/todos', api('getTodos'))
}