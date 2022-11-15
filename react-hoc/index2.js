import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const withCounter = (OriginalComponent, increaseCount) => {
    function NewComponent(props) {
        const [counter, setCounter] = useState(10);
        return (
            <OriginalComponent
                name="Some Name"
                counter={counter}
                incrementCounter={() => setCounter((size) => size + increaseCount)}
                {...props}
            />
        );
    }
    return NewComponent;
};

function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter } = props;
    return (
        <div>
            <button onMouseOver={() => setFontSize((size) => size + 1)}>
                Increase on hover
            </button>
            <p style={{ fontSize }}>
                Size of font in onMouseOver function: {fontSize}
            </p>
            <p> Value of 'name' in HoverIncrease: {props.name}</p>
            <button onClick={() => incrementCounter()}>Increment counter</button>
            <p> Value of 'counter' in HoverIncrease: {counter}</p>
        </div>
    );
}

const HoverComponent = withCounter(HoverIncrease, 10);

const App = () => {

    return(
        <div className="box">
            <HoverComponent />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"))