import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
          <nav class="navbar nav-home bg-light navbar-hr">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={'/images/logo-nav.png'} alt="Logo" style={{height: 30}} class="d-inline-block align-text-top"></img>
          <span class="uni-name">GDSC CPU</span> 
        </a>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/event-page">Events</a>
          </li>
        </ul>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
