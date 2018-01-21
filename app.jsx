// JSX >> JS Transpilation


// Here we define function than returns JSX elements
function Hero(props) {
    return (
        <div className="container">
            <img src={props.imageURL} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

// ReactDOM.render(React.createElement(Hero, null), document.getElementById('root'));
ReactDOM.render(<Hero title="React"
                      subtitle="Cool library for user interfaces creation"
                      imageURL="./img/react.png"/>,
document.getElementById('root'));