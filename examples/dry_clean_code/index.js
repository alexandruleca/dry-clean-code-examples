import {USER_ENDPOINT, PROFILE_ENDPOINT} from './constants.js';
import {getRequest, postRequest, handleError} from './request.js';

const getUser = async function () {
    // Reusable function call, 1 line instead of multiple lines with repetitive stuff
    const {result: user, error} = await getRequest(USER_ENDPOINT.GET_USER);
    if (error) {
        // Common error handle 1 line instead of 2
        return handleError(error)
    }
    return user.entity;
}

const updateUser = async function () {
    // Reusable function call, 1 line instead of multiple lines with repetitive stuff
    const {result: user, error} = await postRequest(USER_ENDPOINT.UPDATE_USER, {
        first_name: 'Aegon',
        last_name: 'Targaryen',
        knowledge_base: 9999,
    });
    if (error) {
        // Common error handle 1 line instead of 2
        return handleError(error);
    }
    return user.entity;
}

const getProfile = async function () {
    // Reusable function call, 1 line instead of multiple lines with repetitive stuff
    const {result: profile, error} = await getRequest(PROFILE_ENDPOINT.GET_PROFILE);
    if (error) {
        // Common error handle 1 line instead of 2
        return handleError(error);
    }
    return profile.entity;
}

/*
    This is ugly, but it's just for getting the output for this example.
 */
getUser().then(res => console.log(`User: ${JSON.stringify(res)}`)).catch(err => console.log(err));
updateUser().then(res => console.log(`Update User: ${JSON.stringify(res)}`)).catch(err => console.log(err));
getProfile().then(res => console.log(`Profile: ${JSON.stringify(res)}`)).catch(err => console.log(err));