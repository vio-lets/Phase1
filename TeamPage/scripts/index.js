
class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Hello, {this.props.name}</h1>
                <button>go to my team page</button>
            </div>
        );
    }
}

(function(){
    ReactDOM.render(
        <Greeting name="this is the team page" />,
        document.getElementById("root")
    );
})();