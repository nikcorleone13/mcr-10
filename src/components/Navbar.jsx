import React from "react";
import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontSize: "25px",
    backgroundColor: isActive ? "#343a40" : "",
    color: isActive ? "white" : "#a1a1aa",
  });


const Navbar = () => {
  return (
    <div className="z-[9999] sticky  h-screen w-[200px] bg-gray-950 ">
      <div className="pt-[100px] h-[50%] flex flex-col justify-evenly items-start ">
        <NavLink className="navLink w-[100%] pl-4" style={getActiveStyle} to="/">
          Dashboard
        </NavLink>
        <NavLink className="navLink w-[100%] pl-4" style={getActiveStyle} to="/departments">
          Departments
        </NavLink>
        <NavLink className="navLink w-[100%] pl-4" style={getActiveStyle} to="/products">
          Products
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar