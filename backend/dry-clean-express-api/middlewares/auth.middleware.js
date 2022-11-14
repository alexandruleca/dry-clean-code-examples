/*
    Think of this as a middleware where you check if the request has an authorization or not and allow or decline
    the request. But for example purposes we just console log some stuff.
 */
const authMiddleware = (req, res, next) => {
    console.log('Request Type:', req.method);
    console.log('Authorization:', req.headers.authorization);
    next()
};

export default authMiddleware;