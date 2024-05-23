import React from "react";
import Pic from "../assets/salsa.png";
import { Link } from "react-router-dom";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="header-txt">
          <h2>Flavor Fusion Fiesta!</h2>
        </div>
        <Link to={"/menu"}>
          <button>Order</button>
        </Link>
        <img src={Pic} alt="background-pic" className="background-pic" />
      </div>
    </>
  );
}
