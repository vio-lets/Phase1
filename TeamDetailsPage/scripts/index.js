

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

class TeamDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamDetail:{
                id: 1,
                name: "Jesse's Team",
                description: "This is Jesse's team. Welcome everyone",
                members: [
                    {id:1, name:"Jesse", role:"Trip Planner"},
                    {id:2, name:"Clyde", role:"Travel Guide"},
                    {id:3, name:"Diadawnfly", role:"Photographer"},
                    {id:4, name:"Frank", role:"Accountant"},
                    {id:5, name:"Kevin", role:""},
                    {id:6, name:"Lawrence", role:"Food Supply"},
                    {id:7, name:"Leon", role:""},
                    {id:8, name:"Mike", role:"The Clown"},
                    {id:9, name:"Randy", role:"Food Supply"}],
                desiredSize: 100,
                desiredLocation: ["Mars","Earth","Venus","Moon"],
                vancantRole:["Travel Talent", "Producer", "Shutterbug", "Number Cruncher", "Caterer", "Entertainer"],
                notification: "The upcoming event is updated. Our next destination is the moon. Please prepare your camera and the Nindendo switch. It will be a long trip..."
            }
        }
    }

    render() {
        return (
            <div className="teamDetailPage">
                <h2>Team Details</h2>
                <div className="header">
                    <div className="searchNavbar">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plans <span className="caret"/></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Active Plan</a></li>
                                                <li><a href="#">Past Plans</a></li>
                                                <li><a href="#">Future Plans</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Team Management <span className="caret"/></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Approve member</a></li>
                                                <li><a href="#">Change leader</a></li>
                                                <li><a href="#">Remove member</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="../AddNewTeamPage/index.html">Create New Team</a></li>
                                        <li><a href="../MyTeamsPage/index.html">My Team</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="alert alert-info" role="alert">
                    <p className="highLight">Notification:</p>
                    <p className="notification">{this.state.teamDetail.notification}</p>
                </div>
                <div className="basicInfo">
                    <p className="teamID">#{this.state.teamDetail.id}</p>
                    <p className="teamName">{this.state.teamDetail.name}</p>
                    <p className="description">{this.state.teamDetail.description}</p>
                    <p className="desiredSize">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        Desired Size: {this.state.teamDetail.desiredSize}</p>
                    <p className="desiredLocation">
                        <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                        Desired Location: {this.state.teamDetail.desiredLocation.map(
                        each => {return each + " "}
                    )}</p>
                    <p className="vacantRole">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        Vacant Roles: {this.state.teamDetail.vancantRole.map(
                        each => {return each + " "}
                    )}</p>
                </div>
                <div className="memberWrapper">
                    <table className="table table-hover table-striped memberTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Current Members</th>
                            <th>Assigned Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.teamDetail.members.map(
                            each => {return(
                                <tr>
                                    <td>#{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.role}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
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
        <TeamDetail />,
        document.getElementById("root")
    );
})();