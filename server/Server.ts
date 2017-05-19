import * as http from "http";
import * as debug from "debug";
import {Application} from "./Application";

export class Server {

    private application: Application;
    private server: http.Server;
    private log;
    private bindPort: Number;

    constructor(app: Application) {
        this.application = app;
        this.server = http.createServer(this.application.express);
        this.log = debug('modern-express:server');
        this.log.log = console.log.bind(console);
    }

    get port(): Number {
        return this.bindPort || 3000;
    }

    set port(value: Number) {
        this.bindPort = value;
        this.application.express.set('port', this.bindPort);
    }

    start() {
        this.server.listen(this.bindPort);
        this.server.on('error', (error) => {
            this.log(error);
        });

        this.server.on('listening', () => {
            this.log(`Listening on ${this.bindPort}`);
        });
    }
}