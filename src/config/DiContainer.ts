import { Container } from 'inversify';

export default class DiContainer {
    private _diContainer: Container;

    constructor() {
        this.configure();
    }

    private configure(): void {
        this._diContainer = new Container();

        if (process.env.NODE_ENV === 'mock') {
            this.configureMockRepositories();
        } else {
            this.configureRepositories();
        }
    }

    private configureRepositories(): void {
        console.log('[server]: repository configuration completed');
    }

    private configureMockRepositories(): void {
        console.log('[server]: mock repository configuration completed');
    }

    public get Container(): Container {
        return this._diContainer;
    }
}
