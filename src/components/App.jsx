import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx'

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
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null});
                alert(err);_
            }.bind(this)
        });
    }

    // Get user repos
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage
             + '&client_id='+this.props.clientId+'&client_secret=' + this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({userRepos: data});
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null});
                alert(err);_
            }.bind(this)
        });
    }

    handleFormSubmit(username){
        this.setState( {username: username} , function () {
            this.getUserData();
            this.getUserRepos();
        });
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return (
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
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