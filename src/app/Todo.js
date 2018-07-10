import React, { Component } from 'react';

export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: '',
    }
  }
  
  _handleChange(e){
    const {value} = e.target;
    this.setState({newTodo: value})
  }

  _handleClick(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  _removeTodo(index){
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos});
  }

  render() {
    return (

      <div>
        <form>
          <input onChange={this._handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo" />
          <button onClick={this._handleClick.bind(this)}>Create todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (
              <li onClick={() => this._removeTodo.call(this, index)} key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      // <div>
      //   <input type="text" />
      //   <button onClick={this._handleClick.bind(this)}>click</button>
      //   {this.state.nums.map(num => (<h3 key={num}>{num}</h3>))}
      // </div>
    );
  }

}
