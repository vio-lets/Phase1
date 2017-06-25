class SearchPage extends React.Component {
    constructor(props){
        super(props);
        this.peopleCheckClicked = this.peopleCheckClicked.bind(this);
        this.planCheckClicked = this.planCheckClicked.bind(this);
        this.teamCheckClicked = this.teamCheckClicked.bind(this);
        this.eventCheckClicked = this.eventCheckClicked.bind(this);
        this.activityCheckClicked = this.activityCheckClicked.bind(this);
        this.doSearch = this.doSearch.bind(this);


        this.state = {
            searchDetail:{
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
                plans:[
                    {id:1, name:"Moon Explore", description:"Go to the moon this weekend"},
                    {id:2, name:"Auckland Trip", description:"Explore Auckland city with awesome people"}],
                teams:[
                    {id:1, name:"Jesse's Team", description:"Welcome to this wonderful team with all awesome members"},
                    {id:2, name:"Clyde's Team", description:"Everyone is welcome, join the team to learn some Chinese culture!"}],
                events:[
                    {id:1, name:"Meeting awesome people", date:"1-Jan-2018", time:"3.00pm", location:"somewhere in the city"},
                    {id:2, name:"Make a travel plan", date:"2-Jan-2018", time:"4.00pm", location:"somewhere Albany"}],
                activities:[
                    {id:1, name:"Activity Name", description:"Some activity descriptions here"},
                    {id:2, name:"Another activity", description:"Another activity descriptions here"},
                ],
            },
            membersChecked:false,
            plansChecked:false,
            teamsChecked:false,
            eventChecked:false,
            activityChecked:false,
        }
    }

    renderMember(){
        if(this.state.membersChecked === true){
            return(
                <div className="peopleWrapper">
                    <table className="table table-hover memberTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Members Name</th>
                            <th>Assigned Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.searchDetail.members.map(
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
            )
        }
    }

    renderPlan(){
        if(this.state.plansChecked === true){
            return(
                <div className="planWrapper">
                    <table className="table table-hover planTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Plan Name</th>
                            <th>Plan Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.searchDetail.plans.map(
                            each => {return(
                                <tr>
                                    <td>#{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.description}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    renderTeam(){
        if(this.state.teamsChecked === true){
            return(
                <div className="teamWrapper">
                    <table className="table table-hover teamTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                            <th>Team Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.searchDetail.teams.map(
                            each => {return(
                                <tr>
                                    <td>#{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.description}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    renderEvent(){
        if(this.state.eventChecked === true){
            return(
                <div className="eventWrapper">
                    <table className="table table-hover eventTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.searchDetail.events.map(
                            each => {return(
                                <tr>
                                    <td>#{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.date}</td>
                                    <td>{each.time}</td>
                                    <td>{each.location}</td>

                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    renderActivity(){
        if(this.state.activityChecked === true){
            return(
                <div className="activityWrapper">
                    <table className="table table-hover activityTable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Activity Name</th>
                            <th>Activity Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.searchDetail.activities.map(
                            each => {return(
                                <tr>
                                    <td>#{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.description}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    peopleCheckClicked(){
        this.setState({
            membersChecked:!this.state.membersChecked
        });
    }
    planCheckClicked(){
        this.setState({
            plansChecked:!this.state.plansChecked
        });
    }
    teamCheckClicked(){
        this.setState({
            teamsChecked:!this.state.teamsChecked
        });
    }
    eventCheckClicked(){
        this.setState({
            eventChecked:!this.state.eventChecked
        });
    }
    activityCheckClicked(){
        this.setState({
            activityChecked:!this.state.activityChecked
        });
    }

    doSearch(){
        alert("Ajax to API");
    }
    render() {
        return (
            <div className="searchPage">
                <h2>Search Page</h2>
                <div className="searchBar">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control searchInput" id="exampleInputEmail1" placeholder="Search"/>
                            <button type="submit" className="btn btn-default" onClick={this.doSearch}>Search</button>
                        </div>
                        <div className="checkbox">
                            <label className="checkboxLab">
                                <input type="checkbox" onClick={this.peopleCheckClicked}/>People
                            </label>
                            <label className="checkboxLab">
                                <input type="checkbox" onClick={this.planCheckClicked}/>Plans
                            </label>
                            <label className="checkboxLab">
                                <input type="checkbox" onClick={this.teamCheckClicked}/>Teams
                            </label>
                            <label className="checkboxLab">
                                <input type="checkbox" onClick={this.eventCheckClicked}/>Events
                            </label>
                            <label className="checkboxLab">
                                <input type="checkbox" onClick={this.activityCheckClicked}/>Activities
                            </label>
                        </div>
                    </form>
                </div>

                {this.renderMember()}
                {this.renderPlan()}
                {this.renderTeam()}
                {this.renderEvent()}
                {this.renderActivity()}
                <ul className="nav navbar-nav links">
                    <li><a href="../index.html">Back To Home</a></li>
                </ul>
            </div>
        );
    }
}

(function(){
    ReactDOM.render(
        <SearchPage />,
        document.getElementById("root")
    );
})();