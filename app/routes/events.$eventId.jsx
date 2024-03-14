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
  return json({ event, authUser });
}

export default function Post() {
  const { event, authUser } = useLoaderData();

  function confirmDelete(event) {
    const response = confirm("Please confirm you want to delete this event.");
    if (!response) {
      event.preventDefault();
    }
  }
  return (
    <div id="event-page" className="page flex flex-col w-full items-center">
      <EventCard event={event} className="w-3/4" />
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
    </div>
  );
}
