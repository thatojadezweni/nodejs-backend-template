import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

export default class AppBootstrap {
    private _server: InversifyExpressServer;

    constructor(container: Container) {
        this._server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });
        this.middleware();
        this.setupDatabase();
    }

    private middleware(): void {
        this._server.setConfig((app) => {
            app.use(cors());
            app.use(helmet());
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
        });
    }

    private setupDatabase(): void {
        console.log("[server]: database setup complete");
    }

    public listen(PORT: number): void {
        this._server.build().listen(PORT, () => {
            console.log(`[server]: listening on port ${PORT}`);
        });
    }
}
