import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <article
        style={{
          background: "#d7e0da",
          width: "auto",
          display: "flex",
          padding: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
      </article>
    </div>
  );
};

export default Header;
