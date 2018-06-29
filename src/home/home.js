import React, { Component } from 'react';



export default class Home extends Component {
    constructor() {
        super();
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
