import React from 'react';  
import ReactDOM from 'react-dom';
import store from '../redux/store/index';
import { connect } from "react-redux";
import Form from './form';
import { Grid } from '@material-ui/core';

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

class Todo extends React.Component {
    render() {
      return (
      <div className="root">
        <Grid container spacing={24}>
          <Grid item xs={10} sm={5}>
            <h1>Todo</h1>
            {this.props.entries.map(el => (
              <li className="list-group-item" key={el.id}>
                {el.name}
              </li>
            ))}
          </Grid>
          <Grid item xs={10} sm={5}>
            <Form/>
          </Grid>
        </Grid>
      </div>)
    }
}

const List = connect(mapStateToProps)(Todo);
export default List;