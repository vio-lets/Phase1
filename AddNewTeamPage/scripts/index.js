
class Greeting extends React.Component {

    render() {
        function buttonClickHandle() {
            window.location = "../teampage/index.html";
        };
        return (
            <div className="teamForm">
                <h1 className="text-center">Hello, {this.props.name}</h1>
                <input className="inputTeamName" type="text" placeholder="Team Name"></input>
                <input className="inputTeamDescription" type="text" placeholder="Team Description"></input>
                <button className="btn btn-primary" onClick={buttonClickHandle}>go to team page</button>
            </div>
        );
    }
}

(function(){
    ReactDOM.render(
        <Greeting name="this is add new team page" />,
        document.getElementById("root")
    );
})();