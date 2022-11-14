const apiBaseUrl = 'http://localhost:8080';

const baseRequest = async function (url, method, body = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (method !== 'GET') {
            options.body = JSON.stringify(body)
        }

        fetch(`${apiBaseUrl}/${url}`, options)
            .then((response) => response.json())
            .then((data) => resolve({result: data, error: null}))
            .catch((err) => reject({result: null, error: err}));
    });
};

const handleError = function (error) {
    console.log(error);
    return null;
}

export {
    baseRequest,
    handleError
}