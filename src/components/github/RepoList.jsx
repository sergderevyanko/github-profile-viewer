import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Repo from './Repo.jsx'

class RepoList extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
                    <div>
                        <ul className="list-group">
                            {
                                this.props.userRepos.map(repo => {
                                   return <Repo
                                       repo={repo}
                                       key={repo.id} />
                                })
                            }
                        </ul>
                    </div>
        )
    }
}

export default RepoList