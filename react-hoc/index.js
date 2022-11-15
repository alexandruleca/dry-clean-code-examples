import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const withLoadingFeedback = (feedback) => (Component) => (props) => {
    if (props.isLoading) return <div>{feedback}</div>;
    return <Component {...props} />;
};

const withNoDataFeedback = (feedback) => (Component) => (props) => {
    if (!props.data) return <div>{feedback}</div>;
    return <Component {...props} />;
};

const withDataEmptyFeedback = (feedback) => (Component) => (props) => {
    if (!props.data.length) return <div>{feedback}</div>;
    return <Component {...props} />;
};

const compose = (...fns) =>
    fns.reduceRight((prevFn, nextFn) =>
            (...args) => nextFn(prevFn(...args)),
        value => value
    );

const TodoItem = ({key, item}) => {
    return (
        <li key={key}>{item}</li>
    );
};

const BaseTodoList = ({data}) => {
    return (
        <ul>
            {data.map((item) => (
                <TodoItem key={item.id} item={item}/>
            ))}
        </ul>
    );
};

const TodoList = compose(
    withLoadingFeedback('Loading Todos.'),
    withNoDataFeedback('No Todos loaded yet.'),
    withDataEmptyFeedback('Todos are empty.')
)(BaseTodoList);

const App = () => {

    return(
        <div className="box">
            <TodoList isLoading />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"))