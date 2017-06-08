class Greeting extends React.Component {
    render() {
        return <h1 className="text-center">Hello, {this.props.name}</h1>;
    }
}

(function(){
    ReactDOM.render(
        <Greeting name="Developer" />,
        document.getElementById("root")
    );
})();