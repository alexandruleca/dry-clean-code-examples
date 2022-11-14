const getUser = async function () {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => resolve({result: data.entity, error: null}))
            .catch((err) => reject({result: null, error: err}));
    })
}

const updateUser = async function () {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: 'Aegon',
                last_name: 'Targaryen',
                knowledge_base: 9999,
            }),
        })
            .then((response) => response.json())
            .then((data) => resolve({result: data.entity, error: null}))
            .catch((err) => reject({result: null, error: err}));
    })
}

const getProfile = async function () {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => resolve({result: data.entity, error: null}))
            .catch((err) => reject({result: null, error: err}));
    })
}

getUser().then(res => console.log(`User: ${JSON.stringify(res)}`)).catch(err => console.log(err));
updateUser().then(res => console.log(`Update User: ${JSON.stringify(res)}`)).catch(err => console.log(err));
getProfile().then(res => console.log(`Profile: ${JSON.stringify(res)}`)).catch(err => console.log(err));