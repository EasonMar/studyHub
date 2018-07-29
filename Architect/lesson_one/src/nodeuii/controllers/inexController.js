class IndexController {
    constructor() {

    }

    indexAction() {
        return async(ctx, next) => {
            cts.body = "Hello lesson_one"
        }
    }
}