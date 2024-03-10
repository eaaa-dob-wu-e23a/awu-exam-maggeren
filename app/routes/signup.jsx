import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import mongoose from "mongoose";
import { authenticator } from "../services/auth.server";
import { sessionStorage } from "../services/session.server";
import AuthForm from "../components/AuthForm";

export async function loader({ request }) {
  // If the user is already authenticated redirect to /posts directly
  await authenticator.isAuthenticated(request, {
    successRedirect: "/events",
  });
  // Retrieve error message from session if present
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  // Get the error message from the session
  const error = session.get("sessionErrorKey");
  // Remove the error message from the session after it's been retrieved
  session.unset("sessionErrorKey");
  // Commit the updated session that no longer contains the error message
  const headers = new Headers({
    "Set-Cookie": await sessionStorage.commitSession(session),
  });

  return json({ error }, { headers }); // return the error message
}

export default function SignUp() {
  // if i got an error it will come back with the loader data
  const loaderData = useLoaderData();
  console.log("error:", loaderData?.error);

  return AuthForm({
    error: loaderData?.error,
    isSignUp: true,
  });
}
export async function action({ request }) {
  try {
    const formData = await request.formData(); // get the form data
    const newUser = Object.fromEntries(formData); // convert the form data to an object
    await mongoose.models.User.create(newUser); // create the user

    return redirect("/signin"); // redirect to the sign-in page
  } catch (error) {
    if (error.code === 11000) {
      const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
      );
      session.set("sessionErrorKey", "Email already in use");
      const headers = new Headers({
        "Set-Cookie": await sessionStorage.commitSession(session),
      });
      return redirect("/signup", { headers });
    }
    return redirect("/signup");
  }
}
