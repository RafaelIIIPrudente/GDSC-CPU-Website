import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [eventLead, setEventLead] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getEventById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setTitle(response.data.title);
        setDate(response.data.date);
        setEventLead(response.data.eventLead);
        setEventDescription(response.data.eventDescription);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getEventById();
  }, [id]);

  const updateEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/events/${id}`, {
        title: title,
        date: date,
        eventLead: eventLead,
        eventDescription: eventDescription
      });
      navigate("/events");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Events</h1>
      <h2 className="subtitle">Edit Event</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateEvent}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Event Name"
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
                    placeholder="Date"
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
                    placeholder="Event Lead"
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
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditEvent;
