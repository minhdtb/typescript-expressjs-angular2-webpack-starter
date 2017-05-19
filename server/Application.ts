import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import {Route} from "./routes/Route";
import {IndexRoute} from "./routes/IndexRoute";
import {ApiRoute} from "./routes/ApiRoute";

export class Application {

    private static readonly VIEW_PATH = './server/views/';
    private localExpress: any;

    constructor() {
        this.localExpress = express();

        this.localExpress.set('views', Application.VIEW_PATH);
        this.localExpress.set('view engine', 'ejs');
        this.localExpress.use(express.static('public'));

        this.localExpress.use(logger('dev'));
        this.localExpress.use(bodyParser.urlencoded({
            extended: true
        }));
        this.localExpress.use(bodyParser.json());

        this.localExpress.use(cookieParser());

        this.setRoute(new ApiRoute());
        this.setRoute(new IndexRoute());
    }

    get express() {
        return this.localExpress;
    }

    setRoute(route: Route) {
        this.localExpress.use(route.register());
    }
}