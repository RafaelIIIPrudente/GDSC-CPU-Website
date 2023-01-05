import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [eventLead, setEventLead] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const navigate = useNavigate();

  const saveEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/events", {
        title: title,
        date: date,
        eventLead: eventLead,
        eventDescription: eventDescription,

      });
      navigate("/events");
    } catch (error) {
      if (error.response) {
        setDate(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Events</h1>
      <h2 className="subtitle">Add New Event</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveEvent}>
              <p className="has-text-centered">{date}</p>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter date"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Event Lead</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={eventLead}
                    onChange={(e) => setEventLead(e.target.value)}
                    placeholder="Enter lead name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
