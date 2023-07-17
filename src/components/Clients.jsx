"use client";

import { createContext, useEffect, useState } from "react";
import "../components/style.css";
import axios from "axios";
import FormData from "form-data";

export const Context = createContext({ user: {} });
export const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/newtask")
      .then(function (response) {
        setData(response.data.task);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const Form = (props) => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState("");

  const getData = () => {
    axios
      .get("http://localhost:3000/api/newtask")
      .then(function (response) {
        props.getDataFromOutCity(response.data.task);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNextJs = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("discription", discription);
    formData.append("image", image);
    console.log(formData);
    axios
      .post("http://localhost:3000/api/newtask", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        getData();
        setTitle("");
        setDiscription("");
        setImage("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="container">
      <label for="uname">
        <b>Title</b>
      </label>
      <input
        type="text"
        value={title}
        placeholder="Enter Title"
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="psw">
        <b>Discription</b>
      </label>
      <input
        type="text"
        value={discription}
        placeholder="Enter Discription"
        name="discription"
        required
        onChange={(e) => setDiscription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit" onClick={handleNextJs}>
        Add Task
      </button>
    </div>
  );
};

export const Delete = ({ id, checked }) => {
  const handleClick = (id) => {
    axios
      .delete("http://localhost:3000/api/newtask", {
        id,
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        position: "absolute",
        marginLeft: "80%",
        display: "flex",
      }}
    >
      <input
        type="checkbox"
        // name="hooks"
        checked={checked}
        // onChange={handleChange}
      />
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Remove Task
      </button>
    </div>
  );
};
