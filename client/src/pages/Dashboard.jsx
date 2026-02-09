import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/api/events").then(res => setEvents(res.data));
  }, []);

  const importEvent = (id) => {
    api.put(`/api/events/${id}/import`, {
      importedBy: "admin",
      importNotes: "Reviewed"
    }).then(() => window.location.reload());
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      {events.map(e => (
        <div key={e._id}>
          {e.title} — <b>{e.status}</b>
          <button onClick={() => importEvent(e._id)}>Import</button>
        </div>
      ))}
    </div>
  );
}
