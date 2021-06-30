import React from "react";
import HeaderSearch from "./HeaderSearch";
import BarSearch from "./BarSearch";
import "../css/Home.css";
import logo from "../images/googlelogo.png";

function Home() {
  return (
    <>
      <HeaderSearch />
      <div className="logo">
        <img src={logo} alt="google" />
      </div>
      <BarSearch visible={true} />
    </>
  );
}

export default Home;
