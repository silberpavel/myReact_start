// JSX >> JS Transpilation


// Here we define function than returns JSX elements
function Hero() {
    return (
        <div className="container">
            <img src="./img/react.png" />
            <h1>React</h1>
            <p>Cool library for user interfaces creation</p>
        </div>
    );
}

// ReactDOM.render(React.createElement(Hero, null), document.getElementById('root'));
ReactDOM.render(<Hero />, document.getElementById('root'));