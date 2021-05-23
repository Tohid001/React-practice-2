import React, { Component } from "react";
import ToDo from "./Components/todo";

export default class App extends Component {
  state = {
    todoCounter: 1,
    list: [
      {
        id: 1,
        createdAt: new Date(),
      },
    ],
  };

  addToStart = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...this.state.list];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };
  addToEnd = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [...this.state.list, { id: nextId, createdAt: date }];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };

  sortByEarliest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  sortByLatest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  render() {
    const { todoCounter, list } = this.state;
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart}>Add New to Start</button>
        <button onClick={this.addToEnd}>Add New to End</button>
        <button onClick={this.sortByEarliest}>Sort by Earliest</button>
        <button onClick={this.sortByLatest}>Sort by Latest</button>
        <table>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Item</th>
            <th>Created at</th>
          </tr>
          {list.map((todo, index) => (
            <ToDo key={index} props={{ index, ...todo }} />
          ))}
        </table>
      </div>
    );
  }
}
