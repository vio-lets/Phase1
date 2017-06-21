
let teamDataFromAPI = {"teams":[
    {"id":1, "name":"Jesse's Team", "description":"This is Jesse's team. Welcome everyone"},
    {"id":2, "name":"Clyde's Team", "description":"This is Clyde's team. Welcome everyone"},
    {"id":3, "name":"Diadawnfly's Team", "description":"This is Diadawnfly's team. Welcome everyone"},
    {"id":4, "name":"Frank's Team", "description":"This is Frank's team. Welcome everyone"},
    {"id":5, "name":"Kevin's Team", "description":"This is Kevin's team. Welcome everyone"},
    {"id":6, "name":"Lawrence's Team", "description":"This is Lawrence's team. Welcome everyone"},
    {"id":7, "name":"Leon's Team", "description":"This is Leon's team. Welcome everyone"},
    {"id":8, "name":"Mike's Team", "description":"This is Mike's team. Welcome everyone"},
    {"id":9, "name":"Randy's Team", "description":"This is Randy's team. Welcome everyone"}
]};

class MyTeamPage extends React.Component {

    constructor(props){
        super(props);
        this.goToDetail = this.goToDetail.bind(this);
        this.state = {
            data:teamDataFromAPI
        }
    }

    goToDetail(){
        window.location = "../TeamDetailsPage/index.html";
    }

    render() {
        return (
            <div className="myTeamPage">
                <h2>My Teams</h2>
                <h4> You are currently in the following teams:</h4>
                <div className="teamsDisplay">
                    {this.state.data.teams.map(each => {
                        return(
                            <div className="eachTeam">
                                <h5 className="teamName">{each.name}</h5>
                                <h5 className="teamId">#{each.id}</h5>
                                <ul className="nav navbar-nav links">
                                    <li><a href="#" onClick={this.goToDetail}>Details</a></li>
                                </ul>
                                <h5 className="teamDescription">{each.description}</h5>
                            </div>
                        )
                    })}
                </div>
                <ul className="nav navbar-nav links">
                    <li><a href="../index.html">Back To Home</a></li>
                </ul>
            </div>
            );
    }
}

(function(){
    ReactDOM.render(
        <MyTeamPage />,
        document.getElementById("root")
    );
})();