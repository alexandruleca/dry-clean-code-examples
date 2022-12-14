import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const withFetchData = (Component, url) => (props) => {
    const [data, setData] = useState({})

    const fetchData = async () => {
        fetch(`https://reqres.in/api${url}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setData(json))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Component data={data} {...props} />
    );
}

const BaseComponent = ({data}) => {
    return (
        <pre>{JSON.stringify(data)}</pre>
    )
}

const UserComponent = withFetchData(BaseComponent, '/users/2')
const UserListComponent = withFetchData(BaseComponent, '/users')

const App = () => {

    return(
        <div className="box">
            <UserComponent />
            <UserListComponent />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"))