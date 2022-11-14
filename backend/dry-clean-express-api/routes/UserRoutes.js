import {BaseRoutes, REQUEST_METHODS} from "./index.js";
import {userMiddleware} from "../middlewares/index.js";
import {UserMock} from "../entities/index.js";

/*
    User routes collection that extends Base routes, inherits everything BaseRoutes supports.
 */
class UserRoutes extends BaseRoutes {
    constructor(baseUrl, app) {
        super();
        // Override base url
        this.baseUrl = baseUrl;
        this.app = app;
        this.entity = new UserMock();
        // Override middleware listing to add userMiddleware that should only be available to this route collection.
        this.middlewares = {
            ...this.middlewares, ...{
                userMiddleware: userMiddleware,
            }
        }
    }

    /*
        This is where you override the BaseRoutes function to include the routes you want to use in the current
        collection that extends BaseRoutes.
     */
    initializeRoutes() {
        // Exclude post from the default endpoint mapping because we also want to add the userMiddleware to it.
        super.initializeRoutes([REQUEST_METHODS.GET, REQUEST_METHODS.DELETE]);

        // Because we excluded the default post route at the previous line we need to initialize it separately here.
        this.initPostRoute('', [this.middlewares.authMiddleware, this.middlewares.userMiddleware], this.post)
        // Register the custom get action that is available for the user routes collection.
        this.initGetRoute('custom', [this.middlewares.authMiddleware, this.middlewares.userMiddleware], this.getCustomAction)
    }

    /*
        This is how you override the rootPost method from BaseRoutes, you can make it something different
        from the original handler.
     */
    post = (req, res, next) => {
        const body = req.body;
        res.json({
            overridenInController: true,
            entity: this.entity.update(
                1,
                body
            )
        });
    };

    /*
        A custom get method only available in the User Routes collection.
     */
    getCustomAction = (req, res, next) => {
        res.json({custom: true});
    }
}

export default UserRoutes;