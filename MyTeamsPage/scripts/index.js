
class Greeting extends React.Component {

    render() {
        function buttonClickHandle() {
            window.location = "../teampage/index.html";
        };
        return (
            <div>
                <h1 className="text-center">Hello, {this.props.name}</h1>
                <button className="btn btn-primary" onClick={buttonClickHandle}>go to team page</button>
            </div>
            );
    }
}

(function(){
    ReactDOM.render(
        <Greeting name="this is my teams page" />,
        document.getElementById("root")
    );
})();