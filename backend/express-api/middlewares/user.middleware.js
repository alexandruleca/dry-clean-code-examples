const userMiddleware = (req, res, next) => {
    console.log('Triggering user middleware...');
    next()
};

export default userMiddleware;