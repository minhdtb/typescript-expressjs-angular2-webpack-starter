import {Route} from "./Route";
import * as express from "express";

export class IndexRoute extends Route {

    registerRoutes() {
        this.all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.render('index');
        });
    }
}