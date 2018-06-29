import React from 'react';  
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter, Redirect} from 'react-router-dom'
import { Button } from '../../node_modules/@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors/purple'
import {green} from '@material-ui/core/colors/green'
import {red} from '@material-ui/core/colors/red'


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
});

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        redirect: false
    }
    handleSubmit() {
        this.setState({redirect: true});
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
          <form>
            <label>
                Username: <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)} /><br /><br />
                Password: <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
            </label>
            <br /> <br />
            <Button variant="contained" color="primary"onClick={() => this.handleSubmit()}>Submit</Button>
          </form>
          </div>
        );
    }
}
export default Login;