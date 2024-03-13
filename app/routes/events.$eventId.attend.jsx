import { redirect } from "@remix-run/node";
import mongoose from "mongoose";
import { authenticator } from "../services/auth.server";

export async function action({ request, params }) {
  // Protect the route and get the user
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: request.url,
  });
  // find the event
  const event = await mongoose.models.Event.findById(params.eventId);

  //make sure user is not the creator
  if (user._id == event.creator) {
    console.log("You cannot attend your own event");
    return redirect(`/events/${params.eventId}`);
  }
  //make sure user is not already attending
  if (event.attendees.includes(user._id)) {
    console.log("You are already attending this event");
    return redirect(`/events/${params.eventId}`);
  }
  //add the user to the attendees
  event.attendees.push(user._id);
  //save the event
  await event.save();

  return redirect("/events");
}
