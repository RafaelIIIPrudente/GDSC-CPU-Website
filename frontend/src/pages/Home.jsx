import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <>
      <Socials></Socials>
      <Navbar></Navbar>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/1.png" class="d-block w-100" alt="hero-1"></img>
            <div class="carousel-caption d-none d-md-block">
              <h4>LEARN.</h4>
              <p>Learn about a wide range of technical topics through hands-on workshops and projects.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/2.png" class="d-block w-100" alt="hero-2"></img>
            <div class="carousel-caption d-none d-md-block">
              <h4>CONNECT.</h4>
              <p>Meet other students on campus interested in developer technologies.  </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/3.png" class="d-block w-100" alt="hero-3"></img>
            <div class="carousel-caption d-none d-md-block">
              <h4>GROW.</h4>
              <p>Apply your new learnings and connections to build great solutions.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="greetings">
        <div class="navbar">
          <div class="container">
            <div class="greetings-content" href="disabled">
              <h1 style={{fontSize: 40, fontWeight: 500, color: "black"}}> <span> Google Developer Student Clubs </span> <br></br>Central Philippine University</h1>
              <p class="sign-up-greeting">Sign up for our newsletter and receive updates in the community!</p>
              <button type="button" class="btn btn-primary google-blue-button"><a class="become-a-member" target="_blank" href="https://gdsc.community.dev/central-philippine-university/" rel="noreferrer">Become a Member!</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;