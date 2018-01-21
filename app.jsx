// JSX >> JS Transpilation
// props - major component of React

// Here we define function than returns JSX elements
function Hero(props) {
    // Properties cannot be changed!
    function handleClick() {
        props.count += 1;
        
    }

    return (
        <div className="container">
            <div className="count">{props.count}</div>
            <img src={props.imageURL} onClick={handleClick} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

// ReactDOM.render(React.createElement(Hero, null), document.getElementById('root'));
ReactDOM.render(
    // if we render more than one element have to be div wrapped.
    <div>
        <Hero title="React"
            subtitle="Cool library for user interfaces creation"
            imageURL="./img/react.png"
            count="0" />
        <Hero title="Angular 2"
            subtitle="One framework"
            imageURL="https://resoundingechoes.net/wp-content/uploads/angular-logo.png"
            count="0" />
    </div>,
document.getElementById('root'));