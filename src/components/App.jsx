import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: 'sergderevyanko',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    // GET USER DATA FROM GITHUB
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username
            + '?client_id='+this.props.clientId+'&client_secret=' + this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({userData: data});
                console.log(data);
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null});
                alert(err);_
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return (
            <div>
                <Profile userData = {this.state.userData} />
            </div>
        )
    }

}

App.propTypes = {
    clientId: PropTypes.string,
    clientSecret: PropTypes.string
}

App.defaultProps = {
    clientId: 'feacd5e2476f9c69d9c7',
    clientSecret: '219cbf4d1e033363d129ab6191a81c2667248f31'
}

export default App