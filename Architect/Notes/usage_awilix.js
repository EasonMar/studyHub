/**
 * Awilix has a pretty simple API (but with many possible ways to invoke it). At minimum, you need to do 3 things:
 * - Create a container
 * - Register some modules in it
 * - Resolve and use!
 */
const awilix = require('awilix')

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

// This is our app code... We can use
// factory functions, constructor functions
// and classes freely.
class UserController {
    // We are using constructor injection.
    constructor(opts) {
        // Save a reference to our dependency.
        this.userService = opts.userService
    }

    // imagine ctx is our HTTP request context...
    getUser(ctx) {
        return this.userService.getUser(ctx.params.id)
    }
}

container.register({
    // Here we are telling Awilix how to resolve a
    // userController: by instantiating a class.
    userController: awilix.asClass(UserController)
})

// Let's try with a factory function.
const makeUserService = ({ db }) => {
    // Notice how we can use destructuring
    // to access dependencies
    return {
        getUser: id => {
            return db.query(`select * from users where id=${id}`)
        }
    }
}

container.register({
    // the `userService` is resolved by
    // invoking the function.
    userService: awilix.asFunction(makeUserService)
})

// Alright, now we need a database.
// Let's make that a constructor function.
// Notice how the dependency is referenced by name
// directly instead of destructuring an object.
// This is because we register it in "CLASSIC"
// injection mode below.
function Database(connectionString, timeout) {
    // We can inject plain values as well!
    this.conn = connectToYourDatabaseSomehow(connectionString, timeout)
}

Database.prototype.query = function(sql) {
    // blah....
    return this.conn.rawSql(sql)
}

// We use register coupled with asClass to tell Awilix to
// use `new Database(...)` instead of just `Database(...)`.
// We also want to use `CLASSIC` injection mode for this
// registration. Read more about injection modes below.
container.register({
    db: awilix.asClass(Database).classic()
})

// Lastly we register the connection string and timeout values
// as we need them in the Database constructor.
container.register({
    // We can register things as-is - this is not just
    // limited to strings and numbers, it can be anything,
    // really - they will be passed through directly.
    connectionString: awilix.asValue(process.env.CONN_STR),
    timeout: awilix.asValue(1000)
})

// We have now wired everything up!
// Let's use it! (use your imagination with the router thing..)
router.get('/api/users/:id', container.resolve('userController').getUser)

// Alternatively, using the `cradle` proxy..
router.get('/api/users/:id', container.cradle.userController.getUser)

// Using  `container.cradle.userController` is actually the same as calling
// `container.resolve('userController')` - the cradle is our proxy!