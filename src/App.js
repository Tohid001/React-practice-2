import React, { useReducer, useEffect } from "react";
const initialState = { loading: true, error: "", data: {} };
const reducer = (state, { type, value }) => {
  switch (type) {
    case "Success":
      return { ...state, loading: false, error: false, data: value };
    case "failed":
      return { ...state, loading: false, error: "something went wrong!" };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("done");
        // setTimeout(() => {
        //   dispatch({ type: "Success", value: res });
        // }, 2000);
        dispatch({ type: "Success", value: res });
      })
      .catch((error) => {
        dispatch({ type: "Failed" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.data.title}
      {state.error ? state.error : null}
    </div>
  );
}
