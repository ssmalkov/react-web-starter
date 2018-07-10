import React, { Component } from 'react';

export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      nums: [1, 2, 3, 4, 5]
    }
  }
  
  _handleClick(){
    const newNums = [...this.state.nums, 6];
    this.setState({nums: newNums})
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this._handleClick.bind(this)}>click</button>
        {this.state.nums.map(num => (<h3 key={num}>{num}</h3>))}
      </div>
    );
  }
  
}
