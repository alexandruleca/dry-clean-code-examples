import {API_BASE_URL, REQUEST_METHOD} from './constants.js';
/*
    Extract the common piece of your repetitive code and make it reusable for any use case.
 */
const baseRequest = async function (url, method, body = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                // Make it possible to rewrite the already existing headers and add custom ones for each request call.
                ...headers,
            },
        }
        if (method !== REQUEST_METHOD.GET) {
            options.body = JSON.stringify(body)
        }

        fetch(`${API_BASE_URL}/${url}`, options)
            .then((response) => response.json())
            .then((data) => resolve({result: data, error: null}))
            .catch((err) => reject({result: null, error: err}));
    });
};

/*
    Add wrappers for specific functions, for example the GET/HEAD method can't have a body attached, you can make a
    wrapper over the requestHelper to handle the signature for GET requests, while also eliminating the need to specify
    the request method from the function signature.
 */
const getRequest = async function (url, headers) {
    return baseRequest(url, REQUEST_METHOD.GET, {}, headers);
}

const postRequest = async function (url, body, headers) {
    return baseRequest(url, REQUEST_METHOD.POST, body, headers);
}

/*
    Do whatever you need to do when you get an error, whether it is logging or throwing it or both,
    for simplicity we simply log it and return null for this use case.
 */
const handleError = function (error) {
    console.log(error);
    return null;
}

export {
    baseRequest,
    getRequest,
    postRequest,
    handleError
}