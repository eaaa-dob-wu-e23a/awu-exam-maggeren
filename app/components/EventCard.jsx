import UserAvatar from "./UserAvatar";
import { useLocation, Form, Link } from "@remix-run/react";
import AttendeesList from "./AttendeesList";
import { avatarFromInitials } from "../components/UserAvatar";
import Button from "./Button";
import {
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
export default function EventCard({
  event,
  className,
  isAttending,
  hasDetails,
}) {
  const date = new Date(event.date);
  const attendeesExist = event.attendees?.length > 0;
  const locationExists = event.location;
  let location = useLocation();
  return (
    <>
      <div
        className={`post-card bg-white rounded-lg shadow-md p-5 mb-4 relative ${className}`}
      >
        <UserAvatar user={event.creator} />
        <div className="relative flex-grow">
          <Link to={`/events/${event._id}`}>
            <img
              src={
                event.image !== ""
                  ? event.image
                  : "https://placehold.co/600x400?text=FitMeet"
              }
              alt={event.title}
              className="w-full h-64 object-cover rounded-md"
            />
          </Link>
          {/* Display the date on the event picture with a background */}
          <div className="absolute top-2 right-2 text-white">
            <div className="flex items-center bg-black bg-opacity-50 rounded p-1">
              <CalendarIcon className="h-6" />
              <span className="ml-1">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Display the time on the event picture with a background */}
          <div className="absolute bottom-2 right-2 text-white">
            <div className="flex items-center bg-black bg-opacity-50 rounded p-1">
              <ClockIcon className="h-6 mr-1" />
              <span>
                {`${date.getHours().toString().padStart(2, "0")}:${date
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
              </span>
            </div>
          </div>
          {/* Display the leave event button on the image if we are on profile page and isAttending */}
          {isAttending && location.pathname === "/profile" && (
            <Form method="post" action={`${event._id}/leave-event`}>
              <Button
                type="submit"
                className="absolute top-2 left-2"
                isDelete={true}
              >
                Leave
              </Button>
            </Form>
          )}
        </div>
        <h3 className="text-xl font-bold mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {event.title}
        </h3>
        <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis mb-4">
          {event.description}
        </p>

        <div className="mt-2 flex flex-row">
          {attendeesExist && !hasDetails && (
            <div className="flex items-start">
              <p className="text-lg font-bold mr-2 mt-1">Attendees</p>
              <div className="flex -space-x-2 overflow-hidden">
                {event.attendees
                  ? event.attendees
                      .slice(0, 5)
                      .map((attendee, index) =>
                        attendee.avatar ? (
                          <img
                            key={index}
                            className="inline-block h-10 w-10 rounded-full object-cover"
                            src={attendee.avatar}
                            alt=""
                          />
                        ) : (
                          <div key={index}>
                            {avatarFromInitials(attendee.name)}
                          </div>
                        )
                      )
                  : null}
              </div>
            </div>
          )}
          {!attendeesExist && (
            <div className="flex flex-col items-start justify-center">
              <p className="text-lg font-bold mt-2">No attendees yet</p>
            </div>
          )}
          {attendeesExist && hasDetails && (
            <AttendeesList attendees={event.attendees} />
          )}
          {locationExists && (
            <p className="text-lg font-bold ml-auto flex items-end">
              <MapPinIcon className="h-6 mr-2" />
              {event.location}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
