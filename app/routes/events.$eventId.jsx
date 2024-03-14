import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import mongoose from "mongoose";
import EventCard from "../components/EventCard";
import { authenticator } from "../services/auth.server";
import Button from "../components/Button";

export function meta({ data }) {
  return [
    {
      title: `FitMeet - ${data.event.title || "Event"}`,
    },
  ];
}

export async function loader({ request, params }) {
  // Ensure the user is authenticated
  const authUser = await authenticator.isAuthenticated(request);
  // Load the post and the user who created it
  const event = await mongoose.models.Event.findById(params.eventId)
    .populate("creator")
    .populate("attendees");

  const relatedEvents = await mongoose.models.Event.find({
    $and: [
      { _id: { $ne: event._id } }, // Exclude the current event
      {
        $or: [
          { creator: event.creator._id }, // Events where the creator is attending
          { attendees: { $in: event.attendees } }, // Events where attendees are attending
        ],
      },
    ],
  })
    .populate("creator")
    .populate("attendees");

  return json({ event, authUser, relatedEvents });
}

export default function Post() {
  const { event, authUser, relatedEvents } = useLoaderData();
  console.log("related ", relatedEvents);
  function confirmDelete(event) {
    const response = confirm("Please confirm you want to delete this event.");
    if (!response) {
      event.preventDefault();
    }
  }
  return (
    <div id="event-page" className="page flex flex-col w-full items-center">
      <EventCard event={event} className="w-3/4" hasDetails={true} />
      {authUser && (
        <>
          {authUser._id !== event.creator._id &&
            !event.attendees.some(
              (attendee) => attendee._id === authUser._id
            ) && (
              <Form action="attend" method="post">
                <Button>Attend</Button>
              </Form>
            )}

          {authUser._id === event.creator._id && (
            <div className="btns flex flex-row space-x-2 items-center">
              <Form action="update">
                <Button isDelete={false} children={"Update"} />
              </Form>
              <Form action="destroy" method="post" onSubmit={confirmDelete}>
                <Button isDelete={true} children={"Delete"} />
              </Form>
            </div>
          )}
        </>
      )}
      {/* Related events */}

      {relatedEvents && relatedEvents.length > 0 && (
        <div className="flex-row mt-20 w-3/4">
          <h2 className="text-xl text-center font-bold mb-4">Related events</h2>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar space-x-4 justify-center">
            {relatedEvents.map((event) => (
              <EventCard key={event._id} event={event} className={"w-96"} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
