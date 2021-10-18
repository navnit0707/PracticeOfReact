import React, { Component } from 'react';

class Counter extends Component {
    //state is a property of component 
    // this stores data that component needed
    state = {
        count: 0,
        tags: ["tag1","tag2","tag3"]
    };
    /*style = {
        fontSize: 10,
        fontWeight: "Bold"
    }; */
    render() {   
        return (
        <div>
            <span  className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment </button>
            <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
        </div>
        );
    }
    //rendering class dynamicaly 
    getBadgeClass(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {count} = this.state; //object destructuring
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;