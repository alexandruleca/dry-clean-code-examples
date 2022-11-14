import {BaseRoutes} from "./index.js";

/*
    Profile routes collection that extends Base routes, inherits everything BaseRoutes supports.
 */
class ProfileRoutes extends BaseRoutes {
    constructor(baseUrl, app) {
        super();
        // Override base url
        this.baseUrl = baseUrl;
        this.app = app;
    }
}

export default ProfileRoutes;