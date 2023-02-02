import {baseRequest, handleError} from "./request.js";

const getUser = async function () {
    const {result: user, error} = await baseRequest('user', 'GET');
    if (error) {
        return handleError(error)
    }
    return user.entity;
}

const updateUser = async function () {
    const {result: user, error} = await baseRequest('user', 'POST', {
        first_name: 'Aegon',
        last_name: 'Targaryen',
        knowledge_base: 9999,
    });
    if (error) {
        return handleError(error)
    }
    return user.entity;
}

const getProfile = async function () {
    const {result: profile, error} = await baseRequest('profile', 'GET');
    if (error) {
        return handleError(error)
    }
    return profile.entity;
}

getUser()
    .then(res => console.log(`User: ${JSON.stringify(res, null, 4)}`))
    .catch(err => console.log(err));
updateUser()
    .then(res => console.log(`Update User: ${JSON.stringify(res, null, 4)}`))
    .catch(err => console.log(err));
getProfile()
    .then(res => console.log(`Profile: ${JSON.stringify(res, null, 4)}`))
    .catch(err => console.log(err));