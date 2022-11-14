class ProfileMock {
    properties = {
        property1: "value1",
        property2: "value2",
        property3: "value3",
    };

    get(id) {
        return this.properties;
    }

    update(id, partialPayload = {}) {
        this.properties = {...this.properties, ...partialPayload};
        return this.properties;
    }

    delete(id) {
        return true;
    }
}

class ProfileRoutes {
    constructor(app) {
        this.app = app;
        this.entity = new ProfileMock();
        this.middlewares = {
            authMiddleware: (req, res, next) => {
                console.log('Request Type:', req.method);
                console.log('Authorization:', req.headers.authorization);
                next()
            },
            userMiddleware: (req, res, next) => {
                console.log('Triggering user middleware...');
                next()
            },
        }
    }

    initializeRoutes() {
        this.app.get('/profile', [], this.rootGet)
        this.app.post('/profile', [this.middlewares.authMiddleware], this.rootPost)
        this.app.delete('/profile', [this.middlewares.authMiddleware], this.rootDelete)
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

export default ProfileRoutes;