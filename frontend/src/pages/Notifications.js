import React, { useState } from "react";
import "./Notification.css";

function Notification() {

  // NOTIFICATION DATA

  const [notifications, setNotifications] = useState([

    {
      id: 1,
      title: "Application Submitted",
      message: "You applied for Frontend Developer at Google.",
      time: "2 mins ago",
      read: false,
    },

    {
      id: 2,
      title: "Interview Scheduled",
      message: "Microsoft scheduled your interview tomorrow.",
      time: "1 hour ago",
      read: false,
    },

    {
      id: 3,
      title: "New Job Alert",
      message: "Amazon posted a new UI/UX Designer job.",
      time: "3 hours ago",
      read: true,
    },

  ]);

  // MARK AS READ

  const markAsRead = (id) => {

    const updatedNotifications = notifications.map((item) => {

      if (item.id === id) {
        return { ...item, read: true };
      }

      return item;

    });

    setNotifications(updatedNotifications);
  };

  // DELETE NOTIFICATION

  const deleteNotification = (id) => {

    const filteredNotifications = notifications.filter(
      (item) => item.id !== id
    );

    setNotifications(filteredNotifications);
  };

  return (

    <div className="notification-page">

      {/* HEADER */}

      <div className="notification-header">

        <h1>
          Notifications
        </h1>

        <p>
          Stay updated with latest activities
        </p>

      </div>

      {/* NOTIFICATION LIST */}

      <div className="notification-list">

        {notifications.length > 0 ? (

          notifications.map((item) => (

            <div
              className={`notification-card ${
                item.read ? "read" : "unread"
              }`}
              key={item.id}
            >

              {/* CONTENT */}

              <div className="notification-content">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.message}
                </p>

                <span>
                  {item.time}
                </span>

              </div>

              {/* BUTTONS */}

              <div className="notification-buttons">

                {!item.read && (

                  <button
                    className="read-btn"
                    onClick={() => markAsRead(item.id)}
                  >
                    Mark as Read
                  </button>

                )}

                <button
                  className="delete-btn"
                  onClick={() => deleteNotification(item.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <h2 className="empty-text">
            No Notifications
          </h2>

        )}

      </div>

    </div>

  );
}

export default Notification;