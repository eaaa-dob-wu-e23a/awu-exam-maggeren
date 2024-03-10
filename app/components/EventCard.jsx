import UserAvatar from "./UserAvatar";

import React from "react";

export default function EventCard({ event }) {
  return (
    <article className="post-card bg-white rounded-lg shadow-md p-5 mb-4 relative">
      <UserAvatar user={event.creator} />
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {event.title}
      </h3>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {event.description}
      </p>
      {event.attendees?.length > 0 ? (
        <div className="mt-2 flex flex-col">
          <h4 className="text-lg font-bold">
            Attendees ({event.attendees.length})
          </h4>
          <div className="flex -space-x-2 overflow-hidden">
            {event.attendees
              ? event.attendees
                  .slice(0, 5)
                  .map((attendee, index) => (
                    <img
                      key={index}
                      className="inline-block h-10 w-10 rounded-full object-cover"
                      src={attendee.avatar}
                      alt=""
                    />
                  ))
              : null}
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-col">
          <div className="inline-block h-10 w-10">
            <p className="text-lg font-bold">No attendees yet</p>
          </div>
        </div>
      )}
    </article>
  );
}
