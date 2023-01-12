import React from "react";

const Navbar = () => {

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
