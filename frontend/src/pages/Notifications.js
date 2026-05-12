import React, { useEffect, useState } from "react";

function Notifications() {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notifications")) || [];
    setNoti(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notifications</h2>

      {noti.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        noti.map((n, i) => (
          <div key={i} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}>
            <p>{n.message}</p>
            <small>{n.time}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;