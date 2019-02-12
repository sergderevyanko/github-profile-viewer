import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Profile extends Component{

    constructor(props){
        super(props);
        // this.state = {
        //     username: 'sergderevyanko',
        //     userData: [],
        //     userRepos: [],
        //     perPage: 5
        // }
    }


    render(){
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {this.props.userData.name}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.props.userData.avatar_url} className="img-thumbnail"/>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span className="badge badge-primary">{this.props.userData.public_repos} Repos</span>
                                        <span className="badge badge-success">{this.props.userData.public_gists} Gists</span>
                                        <span className="badge badge-info">{this.props.userData.followers} Followers</span>
                                        <span className="badge badge-danger">{this.props.userData.following} Following</span>


                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
                                            <li className="list-group-item"><strong>Email: </strong>{this.props.userData.email}</li>
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                                <a href={this.props.userData.html_url} className="btn btn-primary">Visit Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Profile