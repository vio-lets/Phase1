export class TeamDisplayComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchMethod:'',
            description:'',
            nameErr:'',
            descriptionErr:''
        }
    }


    render() {
        return (
            <div className="teamDisplayComponent">
                <h2>Team display</h2>

            </div>
        );
    }
}

//export default TeamDisplayComponent;