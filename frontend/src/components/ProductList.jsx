import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios.get("http://localhost:5000/events");
    setEvents(response.data);
  };

  const deleteEvent = async (eventId) => {
    await axios.delete(`http://localhost:5000/events/${eventId}`);
    getEvents();
  };

  return (
    <div>
      <h1 className="title">Events</h1>
      <h2 className="subtitle">List of Events</h2>
      <Link to="/events/add" style={{backgroundColor: '#00A150'}} className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Date</th>
            <th>Event Lead</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.uuid}>
              <td>{index + 1}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.eventLead}</td>
              <td>{event.eventDescription}</td>
              <td>
                <button style={{backgroundColor: '#E94336'}}
                  onClick={() => deleteEvent(event.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
