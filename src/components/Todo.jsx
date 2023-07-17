import React from "react";
import { Delete } from "./Clients";

function Todo({ title, discription, id, checked }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>{title}</div>
      <Delete id={id} checked={checked} />
    </div>
  );
}

export default Todo;
