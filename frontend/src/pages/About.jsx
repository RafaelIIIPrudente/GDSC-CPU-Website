import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const About = () => {
  return (
    <>
      <Socials/>
      <Navbar/>
        
  <div class="navbar">
    <div class="container">
      <div class="greetings-content" href="disabled">
        <div class="greetings" style={{textAlign: 'center'}}>
          <h3 style={{fontWeight: 500, fontSize: 20}}>Google Developer Student Clubs</h3>
          <p>Through GDSC, we want to foster the ability to give back to society with the use of technology through GDSC. It's a club where we learn and build new things with other curious developers, exhilarating everyone to their core. The goal is to establish an optimum learning environment on and around campus.</p>  
        </div>
        <div class="greetings" style={{textAlign: 'center'}}>
          <h3 style={{fontWeight: 500, fontSize: 20}}>Central Philippine University</h3>
          <p>The origins of Central Philippine University dates back in 1901 when the American Northern Baptists, through its foreign mission board, the American Baptist Foreign Mission Society, laid a plan to establish mission schools following the comity agreement of the division of the islands for the evangelical mission and through a benevolent grant given by John D. Rockefeller, an American industrialist and philanthropist.</p>  
        </div>
      </div>
    </div>
  </div>

  <div class="navbar grow-skills">
    <div class="container">
      <div class="greetings-content" href="disabled">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight: 500}}>Connect</h5>
              <p class="card-text">Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight: 500}}>Learn</h5>
              <p class="card-text">Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight: 500}}>Grow</h5>
              <p class="card-text">Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar" style={{margin: 20}}>
    <div class="container">
      <div class="greetings-content" href="disabled">
        <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col">
              <iframe width="715" height="402" src="https://www.youtube.com/embed/OBoMpyVSsl8" title="Dang’s story as a Google Developer Student Club lead" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col">
              <div class="lead-about-caption" style={{textAlign: 'left'}}>
                <h3 class="card-title" style={{fontWeight: 500}}>Google Developer Student Club Leads</h3>
                <p class="mb-0">GDSC leads are passionate about helping their peers learn technology and connect. Leads pursue various degrees within undergraduate and graduate programs, but have foundational knowledge about software development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer/>
    </>
  )
}

export default About;