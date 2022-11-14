const authMiddleware = (req, res, next) => {
    console.log('Request Type:', req.method);
    console.log('Authorization:', req.headers.authorization);
    next()
};

export default authMiddleware;