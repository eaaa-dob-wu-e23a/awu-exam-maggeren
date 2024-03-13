import React from "react";
import UserAvatar from "./UserAvatar"; // Make sure to import the UserAvatar component

export default function AttendeesList({ attendees }) {
  return (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <h2>Attendees</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {attendees.map((attendee) => (
          <li key={attendee._id} style={{ marginBottom: "5px" }}>
            <UserAvatar user={attendee} />
          </li>
        ))}
      </ul>
    </div>
  );
}
