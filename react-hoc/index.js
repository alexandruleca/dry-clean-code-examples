import React, { useState, useEffect } from "react";

const withLoadingFeedback = (Component) => (props) => {
    if (props.isLoading) return <div>Loading data.</div>;
    return <Component {...props} />;
};

const withNoDataFeedback = (Component) => (props) => {
    if (!props.data) return <div>No data loaded yet.</div>;
    return <Component {...props} />;
};

const withDataEmptyFeedback = (Component) => (props) => {
    if (!props.data.length) return <div>Data is empty.</div>;
    return <Component {...props} />;
};

const TodoItem = ({key, item}) => {
    return (
        <li key={key}>{item}</li>
    );
};

const BaseTodoList = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const TodoList = withLoadingFeedback(
    withNoDataFeedback(
        withDataEmptyFeedback(BaseTodoList)
    )
);