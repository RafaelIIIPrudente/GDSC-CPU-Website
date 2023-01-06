import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios.get("http://localhost:5000/event-page");
    setEvents(response.data);
  };
  return (
    <>        
      <Socials />
      <Navbar />  
      <div class="greetings">
        <div>
          <div class="container" style={{textAlign: 'center'}}>      
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search for an event..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="input-group-append" onclick="searchByKeyword()">
                <span class="input-group-text" id="basic-addon2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </span>
              </div>
            </div>

            <h3 class="card-title" style={{fontWeight: 500, fontSize: 40, color: 'black'}}>Events</h3>
            <div class="card-deck event-items" style={{marginBottom: 60}}>
              {events.map((event, index) => (
              <div class="card new-card-style" key={event.uuid}>
                <img class="card-img-top" src="https://lh3.googleusercontent.com/9iP7wg-gtd71NJgTiKGrL4cdzdWNFT8rjrMPvkVTME0lVPurRPkJoSivHm8RqAJHUQt2QyRN3CFqSRqbodgpLu7DUaBfNcnN6OkYa7_6rQp_c4_myssY3NmpjzHWnmFh7ex7LqvXFWZM9HzWbuaD8sn75dgt0GEQsCa2tGGwHdqbLh9odpG1G0Vo9ZYST8XpoMxKqQd1TWkQQ-HiAwr0Q8Qi9vY1JRmn0D4UbDQ5tWEnsqV8HHFLTh2yICJ7vu8Vz9IBlwgzyScLice9Of11MoWkQhuS2odVdl9EdtcfxS5gMB0pf5F7KPNvGx2k6DX5Tav0wow6UQmjINz6CW9ni4YLiRnBzsz7bIFqabFZ58RwdIAqIhn2Gna9iDULTr3HYPNX8i2xAP76BUptqNC6F1s52IzjMLWxU93nFpqoLN6wW6aXC5OTlDRf_MLazmgzIJC9hv7NB74bXPrhlz2u0zOQhZUROBwby36eY_gg3tIZXBB6py754Sknrl1GNeCmIbUQ_wKCGkm5hnScEGrXdTlDaqNM0rFsECh0xu9R2V-SRPy8NuLlyLaaZweAkKAXd-9goIZ6S4s3T-uYl92vOfRmnwMW31Th_ubbnLjsJSCE5xry75mDZWfDeL9r4ZcMQquZ19afe5dvYP0j-BpFqowU7Y7YYMO_fxFbjR3mn7OgeyiiSebqUP7KIx8nHUp3bcrSMiK-jEUH08s60TI3rDSGzxjCyEq60SEA2sK3UftaNFw6VxRspaAzbZHUZTDmosfMOcoiTbSJupntXCLv2JLqI5UL2lKLjmSHPPY6Ws5YIqkLls3sRj00YevwhqiGkJwfs9F5qP7cbtdvC-C4VFdcAsSr-4JVqm50MlqmBgZwpnpvz42Fz3oikBSzFuX-e26PBfOQqKLzZkqoWlmThX5ZFMLVblPVUHZzL2ewgVV9f23KI3osILtiZToS-WEmTNBrnfFeOLXbEZVpjpRk_B0ICN3eSgo7s8JDnjT44d2o9mTKMhq7Ei4rLnEOVjocTkVnQSwlhDvCdIgM4fdgdqmbh23Fu8O8Dp2GJN5FRYLMsTu9y6voZlcpJzM7wZpbqqfK81Fxziz8sgz36AxMI33yjgvHBzis7xyJOOS3SJF1uyJ1ZYnf9GuXopsPxqU9uOE2=w1920-h480-no?authuser=2" alt="event-banner"/>
                <div class="card-body">
                  <h5 class="card-title" style={{fontWeight: 500, color: 'black'}}>{event.title}</h5>
                  <p class="card-text">{event.eventDescription}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Event Spearhead: {event.eventLead}</small>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    <script src="script.js"></script>  
    </>
  )
}

export default EventPage;