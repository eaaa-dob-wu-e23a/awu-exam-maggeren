import mongoose from "mongoose";
import { authenticator } from "../services/auth.server";
import { redirect } from "@remix-run/node";

export async function action({ request, params }) {
  // Protect the route
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: request.url,
  });

  // Get the event
  const event = await mongoose.models.Event.findById(params.eventId);

  // Check if the event exists
  if (!event) {
    console.log("Event not found");
    return redirect("/profile"); // or wherever you want to redirect if the event doesn't exist
  }

  if (event.creator.toString() === user._id.toString()) {
    // User is the creator and cannot leave the event
    return redirect(`/profile`);
  }

  // Remove the user from the attendees
  event.attendees = event.attendees.filter((attendee) => attendee != user._id);

  // Save the event
  await event.save();
  return redirect("/profile");
}
