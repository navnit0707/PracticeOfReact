import React, { Component } from 'react';

class Counter extends Component {
    //state is a property of component 
    // this stores data that component needed
    state = {
        count: 0
    };
    render() { 
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button>Increment </button>
        </div>
        );
    }
    formatCount(){
        const {count} = this.state; //object destructuring
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;