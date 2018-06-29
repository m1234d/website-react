import React from 'react';  
import ReactDOM from 'react-dom';
import store from '../redux/store/index';
import { connect } from "react-redux";
import Form from './form';

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

class Todo extends React.Component {
    render() {
      return (
      <div>
        <h1>Todo</h1>
        {this.props.entries.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.name}
          </li>
        ))}
        <Form />
      </div>)
    }
}

const List = connect(mapStateToProps)(Todo);
export default List;