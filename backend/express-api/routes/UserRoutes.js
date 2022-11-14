import {BaseRoutes} from "./index.js";
import {userMiddleware} from "../middlewares/index.js";
import {UserMock} from "../entities/index.js";

class UserRoutes extends BaseRoutes {
    constructor(baseUrl, app) {
        super();
        this.baseUrl = baseUrl;
        this.app = app;
        this.entity = new UserMock();
        this.middlewares = {
            ...this.middlewares, ...{
                userMiddleware: userMiddleware,
            }
        }
    }

    initializeRoutes() {
        super.initializeRoutes();

        this.initGetRoute('custom', [this.middlewares.authMiddleware, this.middlewares.userMiddleware], 'customGet')
        this.initPostRoute('', [this.middlewares.authMiddleware], 'rootPost')
    }

    customGet(req, res, next) {
        res.json({custom: true});
    }
}

export default UserRoutes;