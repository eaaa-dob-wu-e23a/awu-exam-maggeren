import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import mongoose from "mongoose";
import EventCard from "../components/EventCard";
import { authenticator } from "../services/auth.server";

export function meta({ data }) {
  return [
    {
      title: `FitMeet - ${data.event.title || "Event"}`,
    },
  ];
}

export async function loader({ request, params }) {
  // Ensure the user is authenticated
  const authUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/signin",
  });
  // Load the post and the user who created it
  const event = await mongoose.models.Event.findById(params.eventId)
    .populate("creator")
    .populate("attendees");
  return json({ event, authUser });
}

export async function action({ request, params }) {
  // Protect the route
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/signin",
  });
  // Delete the post
  await mongoose.models.Event.findByIdAndDelete(params.eventId);
  return redirect("/events");
}

export default function Post() {
  const { event, authUser } = useLoaderData();

  function confirmDelete(event) {
    const response = confirm("Please confirm you want to delete this post.");
    if (!response) {
      event.preventDefault();
    }
  }
  return (
    <div id="post-page" className="page">
      <EventCard event={event} />
      {authUser._id !== event.creator._id &&
        !event.attendees.some((attendee) => attendee._id === authUser._id) && (
          <Form action="attend" method="post">
            <button>Attend</button>
          </Form>
        )}
      {authUser._id === event.creator._id && (
        <div className="btns">
          <Form action="update">
            <button>Update</button>
          </Form>
          <Form action="destroy" method="post" onSubmit={confirmDelete}>
            <button>Delete</button>
          </Form>
        </div>
      )}
    </div>
  );
}
