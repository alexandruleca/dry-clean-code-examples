import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const withFetchData = (Component, url) => (props) => {
    const [data, setData] = useState({})

    const fetchData = () => {
        setData({success: true, url})
    }

    return (
        <Component data={data} fetchData={fetchData} {...props} />
    );
}

const BaseComponent = ({data, fetchData}) => {
    useEffect(() => {
        fetchData()
    }, []);
    console.log(data);
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

const ComponentWithFetch = withFetchData(BaseComponent, 'http://example.com')

const App = () => {

    return(
        <div className="box">
            <ComponentWithFetch />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"))