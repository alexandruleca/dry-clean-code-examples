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
        super.initializeRoutes(['get', 'delete']);

        this.initPostRoute('', [this.middlewares.authMiddleware, this.middlewares.userMiddleware], this.rootPost)
        this.initGetRoute('custom', [this.middlewares.authMiddleware, this.middlewares.userMiddleware], this.customGet)
    }

    rootPost = (req, res, next) => {
        const body = req.body;
        res.json({
            overridenInController: true,
            entity: this.entity.update(
                1,
                body
            )
        });
    };

    customGet = (req, res, next) => {
        res.json({custom: true});
    }
}

export default UserRoutes;