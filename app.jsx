// Here we create React Steteful component 
var Hero = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function() {
        this.setState({ count: this.state.count + 1 });
    },

    render: function() {
        return (
            <div className="container">
                <div className="count">{this.state.count}</div>
                <img src={this.props.imageURL} onClick={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>    
        );
    }
});

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