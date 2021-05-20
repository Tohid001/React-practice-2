import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  postId: "",
  buttonId: 1,
  data: {},
  loading: true,
  error: false,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "success":
      return { ...state, data: value, loading: false, error: false };
    case "clicked":
      return { ...state, buttonId: state.postId, loading: true };
    case "changed":
      return { ...state, postId: value };
    case "failed":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = () => {
    dispatch({ type: "clicked" });
    console.log("clicked");
  };
  const handleChange = (e) => {
    dispatch({ type: "changed", value: e.target.value });
  };
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${state.buttonId}`)
      .then((response) => {
        console.log("success");
        dispatch({ type: "success", value: response });
      })
      .catch((err) => {
        console.log("failed");
        dispatch({ type: "failed" });
      });
  }, [state.buttonId]);
  return (
    <div>
      <ul>
        <li>
          <input type="text" value={state.postId} onChange={handleChange} />
          <button type="button" onClick={handleClick}>
            show title
          </button>
        </li>
        <li>
          {state.loading
            ? "loading..."
            : state.error
            ? "something is wrong!"
            : state.data.title}
        </li>
      </ul>
    </div>
  );
}
