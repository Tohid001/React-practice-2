import React, { useReducer } from "react";
// import "antd/dist/antd.css";
// import { Form, Input, Button } from "antd";

const initialState = {
  firstName: null,
  lastName: null,
  Country: null,
  City: null,
  email: null,
  password: null,
  bio: null,
  skills: [],
  gender: null,
  birthDate: null,
  agree: null,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "similar":
      return { ...state, ...value };

    default:
      return state;
  }
};
export default function App() {
  const [form, setFormData] = useReducer(reducer, initialState);
  const {
    firstName,
    lastName,
    Country,
    City,
    email,
    password,
    bio,
    skil,
    gender,
    birthDate,
    agree,
  } = form;
  const handleChange = (event) => {
    setFormData({
      type: "similar",
      value: { [event.target.name]: event.target.value },
    });
  };
  return (
    <form>
      <label for="firstName" class="form-label">
        Email address
      </label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder="Doe"
        value={firstName}
        onChange={handleChange}
      />
      <label for="lastName" class="form-label">
        Email address
      </label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder="Doe"
        value={lastName}
        onChange={handleChange}
      />
    </form>
  );
}
