import React from "react";
import "./style.css";
import Link from "next/link";

function Login() {
  return (
    <div class="container">
      <label for="uname">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      />

      <button type="submit">Login</button>
      <div style={{ textAlign: "center" }}>
        <div>OR</div>
        <Link href={"/register"}>Sign-Up</Link>
      </div>
    </div>
  );
}

export default Login;
