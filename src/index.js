import {Link, Route, BrowserRouter, Redirect} from 'react-router-dom'
import React from 'react';  
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './index.css';
import Todo from './todo/todo';
import Login from './login/login';
import Home from './home/home';
import store from "./redux/store/index";
import {Provider} from "react-redux";

class RouteLink extends React.Component {
  state = {
    redirect: false
  }
  renderRedirect() {
    if(this.state.redirect) {
      this.setState({
        redirect: false
      })
      return <Redirect to={this.props.to} />
    }
  }
  redirect() {
    this.setState({
      redirect: true
    })
  }
  render() {
    return (
      <span>
        {this.renderRedirect()}
        <Button raised="true" color={this.props.color} className={this.props.className} onClick={() => this.redirect()}>
        {this.props.children}
        </Button>
      </span>  
   )
  }
}

class Navbar extends React.Component {

  state = {
    logged_in: false,
    redirectHome: true
  }
  getLoginButton() {
    if(!this.state.logged_in) {
      return <RouteLink to="/login" color="inherit" className="login">Login</RouteLink>
    }
  }
  redirectHome() {
    if(this.state.redirectHome) {
      this.setState({
        redirectHome: false
      });
      return <Redirect to="/" />
    }
  }
  render() {
    return (
    <AppBar position="static">
    {this.redirectHome()}
      <Toolbar>
        <IconButton className="menuButton" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" className="flex" color="inherit" onClick={() => this.setState({redirectHome: true})}>      
          React
        </Typography>
        <div className="navbox">
        <RouteLink to="/" color="inherit" className="flex">Home</RouteLink>
          <RouteLink to="/todo" color="inherit" className="nav-right">Todo</RouteLink>
          {this.getLoginButton()}
        </div>
      </Toolbar>
    </AppBar>
  );
  }
}
class Body extends React.Component {

  render() {
    return (
    <div className="body">
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/todo' component={Todo}/>
    </div>
    )
  }
}
class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>);
  }
}


ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'))