import { redirect } from "@remix-run/node";
import mongoose from "mongoose";
import { authenticator } from "../services/auth.server";

export async function action({ request, params }) {
  // Protect the route
  await authenticator.isAuthenticated(request, {
    failureRedirect: request.url,
  });
  // Delete the event
  await mongoose.models.Event.findByIdAndDelete(params.eventId);
  return redirect("/events");
}
