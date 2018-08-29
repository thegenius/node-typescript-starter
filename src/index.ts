import Koa from 'koa';

class App {
    constructor() {
        const koa = new Koa();
        koa.use(ctx => {
            ctx.body = 'Hello Koa! test one';
        });
        koa.listen(1326);
    }
}
const app = new App();

