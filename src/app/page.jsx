"use client";

import React, { useState, useEffect } from "react";
import { Form } from "@/components/Clients";
import Todo from "@/components/Todo";
import axios from "axios";

function page() {
  const [data, setData] = useState();
  const getDataFromOutCity = (data) => {
    setData(data);
  };

  const handleClick = (id) => {
    axios
      .post("http://localhost:3000/api/remove", {
        id,
      })
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Form getDataFromOutCity={getDataFromOutCity} />
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          margin: "20px",
          display: "flex",
        }}
      >
        <div style={{ display: "flex" }}>
          {data &&
            data?.map((res, i) => (
              <>
                <div style={{ margin: "10px" }}>
                  <img
                    src={`http://localhost:3000/${res.image}`}
                    alt="Uploaded Image"
                    width={200}
                    height={200}
                  />
                  <div>
                    <h1>{res?.title}</h1>
                    <p>{res?.discription}</p>
                    <button
                      onClick={() => {
                        handleClick(res._id);
                      }}
                    >
                      Remove Task
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default page;
