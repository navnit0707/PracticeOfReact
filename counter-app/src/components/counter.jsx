import React, { Component } from 'react';

class Counter extends Component {
    //state is a property of component 
    // this stores data that component needed
    state = {
        count: 0
    };
    /*style = {
        fontSize: 10,
        fontWeight: "Bold"
    }; */
    render() { 
        return (
        <div>
            <span style={{fontSize: 30}} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment </button>
        </div>
        );
    }
    formatCount(){
        const {count} = this.state; //object destructuring
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;