import React from 'react';  
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter, Redirect} from 'react-router-dom'
import { Button } from '../../node_modules/@material-ui/core';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions';

function mapDispatchToProps(dispatch) {
    return {
        logIn: () => dispatch(logIn())
    };
}

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        redirect: false
    }
    handleSubmit() {
        console.log("sending")
        fetch("http://localhost:4000/api/login/" + this.state.username + "/" + this.state.password)
        .then(res => res.json()).then((result) => {
            console.log(result);
            if(result.result == "Success") {
                this.props.logIn();
                this.setState({redirect: true});
            }
        }); 
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    getRedirect() {
        if(this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to="/" />
        }
    }
    render() {
    
      return (
          <div>
          {this.getRedirect()}
          <h1>Login</h1>
          <form onSubmit={() => this.handleSubmit()}>
            <label>
                Username: <input type="text" className="form-control" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)} /><br /><br />
                Password: <input type="text" className="form-control" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
            </label>
            <br /> <br />
            <Button variant="contained" color="primary"onClick={() => this.handleSubmit()}>Submit</Button>
          </form>
          </div>
        );
    }
}
export default connect(null,
    mapDispatchToProps,
)(Login);