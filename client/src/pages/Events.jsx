import { useEffect, useState } from "react";
import api from "../api";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:5050/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#ff4c7c" }}>Sydney Events</h1>

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {events.map(e => (
          <div
            key={e._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onClick={() => window.open(e.originalUrl, "_blank")}
            onMouseOver={e => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h2 style={{ marginBottom: "10px", color: "#333" }}>{e.title}</h2>
            <p style={{ marginBottom: "15px", color: "#777" }}>{e.source}</p>
            <button
              style={{
                backgroundColor: "#ff4c7c",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#e03f6f")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#ff4c7c")}
            >
              GET TICKETS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
