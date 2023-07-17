import React from "react";
import "./style.css";
import Link from "next/link";

const SignUp = () => {
  return (
    <div class="container">
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter name" name="name" required />
      <label for="uname">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter email" name="email" required />
      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      />

      <button type="submit">SignIn</button>
      <div style={{ textAlign: "center" }}>
        <div>OR</div>
        <Link href={"/login"}>Log-In</Link>
      </div>
    </div>
  );
};

export default SignUp;
