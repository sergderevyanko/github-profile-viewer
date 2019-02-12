import React, {Component} from 'react';

class Search extends Component{

    constructor(props){
        super(props);
    }

    onSubmit(e){
        e.preventDefault();
        let username=this.refs.username.value.trim();
        if(!username){
            console.error('Not a username '+ username );
            alert('Please enter a username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';


    }

    render(){
        const {repo} = this.props;
        return (
           <div className="form-group">
               <form onSubmit={this.onSubmit.bind(this)}>
                   <label>Search Guthub Users</label>
                   <input type="text" ref="username" className="form-control"/>
               </form>
           </div>
        )
    }
}

export default Search