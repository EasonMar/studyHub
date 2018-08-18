var awilix_1 = require("awilix");
var utils_1 = require("awilix/lib/utils");

function makeInvoker(functionOrClass, opts) {
    return utils_1.isClass(functionOrClass) ?
        makeClassInvoker(functionOrClass, opts) :
        makeFunctionInvoker(functionOrClass, opts);
}

function makeFunctionInvoker(fn, opts) {
    return makeResolverInvoker(awilix_1.asFunction(fn, opts));
}

function makeClassInvoker(Class, opts) {
    return makeResolverInvoker(awilix_1.asClass(Class, opts));
}


function makeResolverInvoker(resolver) {
    /**
     * 2nd step is to create a method to invoke on the result of the resolver.
     * 第二步是创建一个方法，在resovler的result中调用
     */
    return function makeMemberInvoker(methodToInvoke) {
        /**
         * The invoker middleware.
         */
        return function memberInvoker(ctx) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            var container = ctx.state.container;
            // container.build()
            // Builds an instance of a class (or a function) by injecting dependencies, but without registering it in the container.
            var resolved = container.build(resolver);
            return resolved[methodToInvoke].apply(resolved, [ctx].concat(rest));
        };
    };
}