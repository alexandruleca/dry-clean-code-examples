import {BaseRoutes} from "./index.js";

class ProfileRoutes extends BaseRoutes {
    constructor(baseUrl, app) {
        super();
        this.baseUrl = baseUrl;
        this.app = app;
    }
}

export default ProfileRoutes;