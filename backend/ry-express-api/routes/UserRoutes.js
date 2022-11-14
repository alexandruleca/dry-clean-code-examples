class UserMock {
    properties = {
        first_name: "John",
        last_name: "Snow",
        knowledge_base: 0,
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

class UserRoutes {
    constructor(app) {
        this.app = app;
        this.entity = new UserMock();
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
        this.app.get('/user', [], this.rootGet)
        this.app.post('/user', [this.middlewares.authMiddleware], this.rootPost)
        this.app.delete('/user', [this.middlewares.authMiddleware], this.rootDelete)
        this.app.get('/user/custom', [this.middlewares.authMiddleware], this.customGet)
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

    customGet = (req, res, next) => {
        res.json({custom: true});
    }
}

export default UserRoutes;