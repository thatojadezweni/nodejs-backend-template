import { BaseHttpController, controller, httpGet } from 'inversify-express-utils';

@controller('/cats')
export default class CatController extends BaseHttpController {
    @httpGet('/')
    public retrieveAll() {
        return this.json(
            [
                {
                    id: 1,
                    name: 'jim',
                    children: 5,
                },
                {
                    id: 2,
                    name: 'john',
                    children: 10,
                },
            ],
            200,
        );
    }
}
