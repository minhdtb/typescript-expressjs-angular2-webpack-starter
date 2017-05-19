import * as express from "express";

export abstract class Route {

    private router;

    abstract registerRoutes();

    constructor() {
        this.router = express.Router();
    }

    register() {
        this.registerRoutes();
        return this.router;
    }

    protected get(uri: string, func: Function) {
        this.router.get(uri, func);
    }

    protected post(uri: string, func: Function) {
        this.router.post(uri, func);
    }

    protected put(uri: string, func: Function) {
        this.router.put(uri, func);
    }

    protected delete(uri: string, func: Function) {
        this.router.delete(uri, func);
    }

    protected all(func: Function) {
        this.router.use(func);
    }
}