import React from "react";
import UserAvatar from "./UserAvatar"; // Make sure to import the UserAvatar component

export default function AttendeesList({ attendees }) {
  return (
    <div className="flex-col">
      <h2 className="text-xl font-semibold mb-2">Attendees</h2>
      <div className="flex max-h-36 overflow-y-auto flex-col flex-grow">
        <ul style={{ listStyle: "none", padding: 0 }}>
          {attendees.map((attendee) => (
            <li key={attendee._id} style={{ marginBottom: "5px" }}>
              <UserAvatar user={attendee} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
