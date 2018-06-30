import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addEntry } from "../redux/actions/index";
import { Button } from "@material-ui/core";

function mapDispatchToProps(dispatch) {
    return {
        addEntry: article => dispatch(addEntry(article))
    };
}

class Form extends Component {
    constructor() {
        super();
        this.state = { //initialize state with empty name
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;
        const id = uuidv1();
        this.props.addEntry({ name, id });
        this.setState({ name: "" });
    }
    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Add entry</h1>
            <div className="form-group">
                <label htmlFor="name">New item: </label>
                <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={this.handleChange}
                />
            </div>
            <br />
            <Button onClick={(event) => this.handleSubmit(event)} variant="raised" color="primary">
                Add
            </Button>
            </form>
        );
    }
}

export default connect(null,
    mapDispatchToProps,
)(Form);