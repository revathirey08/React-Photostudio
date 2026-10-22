import { useState } from "react";
import "./ClickEvents.css";

function ClickEvents() {
  const [message, setMessage] = useState("Welcome!");

  return (
    <div className="click-events">
      <h2>{message}</h2>

      <button onClick={() => setMessage("Welcome to Photo Studio!")}>
        Welcome
      </button>

      <button onClick={() => setMessage("Booking Successful!")}>
        Book Now
      </button>

      <button onClick={() => setMessage("Thank You!")}>
        Thank You
      </button>
    </div>
  );
}

export default ClickEvents;