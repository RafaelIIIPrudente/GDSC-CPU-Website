import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav class="navbar nav-home bg-light navbar-hr">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={'/images/logo-nav.png'} alt="Logo" style={{height: 30}} class="d-inline-block align-text-top"></img>
          <span class="uni-name">GDSC CPU</span> 
        </a>
        </div>
        </nav>
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
