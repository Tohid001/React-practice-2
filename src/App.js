import React, { Component, useReducer } from "react";
import ToDo from "./Components/todo";

const initialState = {
  todoCounter: 1,
  list: [
    {
      id: 1,
      createdAt: new Date(),
    },
  ],
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "addToStart":
      return value;
    case "addToEnd":
      return value;
    case "sortByEarliest":
      return { ...state, list: value };
    case "sortByLatest":
      return { ...state, list: value };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToStart = () => {
    const date = new Date();
    const nextId = state.todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...state.list];
    dispatch({
      type: "addToStart",
      value: { todoCounter: nextId, list: newList },
    });
  };
  const addToEnd = () => {
    const date = new Date();
    const nextId = state.todoCounter + 1;
    const newList = [...state.list, { id: nextId, createdAt: date }];
    dispatch({
      type: "addToEnd",
      value: { todoCounter: nextId, list: newList },
    });
  };

  const sortByEarliest = () => {
    const sortedList = state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    dispatch({ type: "sortByEarliest", value: sortedList });
  };

  const sortByLatest = () => {
    const sortedList = state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    dispatch({ type: "sortByLatest", value: sortedList });
  };
  const { todoCounter, list } = state;
  return (
    <div>
      <br />
      <button onClick={addToStart}>Add New to Start</button>
      <button onClick={addToEnd}>Add New to End</button>
      <button onClick={sortByEarliest}>Sort by Earliest</button>
      <button onClick={sortByLatest}>Sort by Latest</button>
      <table>
        <tr>
          <th>Index</th>
          <th>ID</th>
          <th>Item</th>
          <th>Created at</th>
        </tr>
        {list.map((todo, index) => (
          <ToDo key={todo.id} props={{ index, ...todo }} />
        ))}
      </table>
    </div>
  );
}
