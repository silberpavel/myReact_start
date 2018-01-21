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
ReactDOM.render(
    // if we render more than one element have to be div wrapped.
    <div>
        <Hero title="React"
            subtitle="Cool library for user interfaces creation"
            imageURL="./img/react.png"/>
        <Hero title="Angular 2"
            subtitle="One framework"
            imageURL="https://resoundingechoes.net/wp-content/uploads/angular-logo.png" />
    </div>,
document.getElementById('root'));