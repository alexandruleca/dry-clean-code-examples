import {authMiddleware} from "../middlewares/index.js";
import {EntityMock} from "../entities/index.js";

class BaseRoutes {
    constructor(baseUrl, app) {
        this.baseUrl = "";
        this.app = app;
        this.entity = new EntityMock();
        this.middlewares = {
            "authMiddleware": authMiddleware,
        };
    }

    initGetRoute(path, middlewares = [], methodName) {
        return this.app.get(`/${this.baseUrl}/${path}`, middlewares, this[methodName]);
    }

    initPostRoute(path, middlewares = [], methodName) {
        return this.app.post(`/${this.baseUrl}/${path}`, middlewares, this[methodName]);
    }

    initDeleteRoute(path, middlewares = [], methodName) {
        return this.app.delete(`/${this.baseUrl}/${path}`, middlewares, this[methodName]);
    }

    initializeRoutes(methods = ['get', 'post', 'delete']) {
        methods.includes('get') && this.initGetRoute('', [], 'rootGet')
        methods.includes('post') && this.initPostRoute('', [this.middlewares.authMiddleware], 'rootPost')
        methods.includes('delete') && this.initDeleteRoute('', [this.middlewares.authMiddleware], 'rootDelete')
    }

    rootGet = (req, res, next) => {
        res.json({
            entity: this.entity.get(1)
        });
    }

    rootPost = (req, res, next) => {
        const body = req.body;
        res.json({
            entity: this.entity.update(
                1,
                body
            )
        });
    }

    rootDelete = (req, res, next) => {
        res.json({
            deleted: this.entity.delete(1)
        });
    }
}

export default BaseRoutes;