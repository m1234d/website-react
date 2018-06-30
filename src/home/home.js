import React, { Component } from 'react';
import store from '../redux/store';



export default class Home extends Component {
    constructor() {
        super();
        window.store = store;
        
    }

    render() {
        return (
        <div>
            {console.log(this.state)}
            <h1>Home</h1>
        </div>
        );
    }
}
