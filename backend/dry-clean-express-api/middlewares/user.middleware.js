/*
    Think of this as a middleware where you check if the request has an authorization or not and allow or decline
    the request. But for example purposes we just console log some stuff.
 */
const userMiddleware = (req, res, next) => {
    console.log('Triggering user middleware...');
    next()
};

export default userMiddleware;