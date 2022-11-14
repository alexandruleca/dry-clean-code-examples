import {authMiddleware} from "../middlewares/index.js";
import {EntityMock} from "../entities/index.js";
import {REQUEST_METHODS} from "./constants.js";

/*
    Extendable base route class that has built in support for get, post and delete for a defined entity. Has support for
    overriding what is needed in order to be extendable.
 */
class BaseRoutes {
    constructor(baseUrl, app) {
        // URL base collection modifier, if left empty routes will be mapped to /
        this.baseUrl = "";
        this.app = app;
        // Entity that will be used for default endpoint processing
        this.entity = new EntityMock();
        // Middleware listing for base routes
        this.middlewares = {
            'authMiddleware': authMiddleware,
        };
        this.methods = REQUEST_METHODS
    }

    /*
        Wrapper function for setting up a new get route that takes the base url into consideration when mapping route.
     */
    initGetRoute(path, middlewares = [], method) {
        return this.app.get(`/${this.baseUrl}/${path}`, middlewares, method);
    }

    /*
        Wrapper function for setting up a new post route that takes the base url into consideration when mapping route.
     */
    initPostRoute(path, middlewares = [], method) {
        return this.app.post(`/${this.baseUrl}/${path}`, middlewares, method);
    }

    /*
        Wrapper function for setting up a new delete route that takes the base url into consideration when mapping route.
     */
    initDeleteRoute(path, middlewares = [], method) {
        return this.app.delete(`/${this.baseUrl}/${path}`, middlewares, method);
    }

    /*
        Route initialization method that maps methods to rotes using routing mapper methods above.
     */
    initializeRoutes(methods = [REQUEST_METHODS.GET, REQUEST_METHODS.POST, REQUEST_METHODS.DELETE]) {
        methods.includes(REQUEST_METHODS.GET) && this.initGetRoute('', [], this.rootGet)
        methods.includes(REQUEST_METHODS.POST) && this.initPostRoute('', [this.middlewares.authMiddleware], this.rootPost)
        methods.includes(REQUEST_METHODS.DELETE) && this.initDeleteRoute('', [this.middlewares.authMiddleware], this.rootDelete)
    }

    /*
        Default route get handler
     */
    rootGet = (req, res, next) => {
        res.json({
            entity: this.entity.get(1)
        });
    }

    /*
        Default route post handler
     */
    rootPost = (req, res, next) => {
        const body = req.body;
        res.json({
            entity: this.entity.update(
                1,
                body
            )
        });
    }

    /*
        Default route delete handler
     */
    rootDelete = (req, res, next) => {
        res.json({
            deleted: this.entity.delete(1)
        });
    }
}

export default BaseRoutes;