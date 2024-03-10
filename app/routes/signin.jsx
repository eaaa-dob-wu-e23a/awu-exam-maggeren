import { json, redirect } from "@remix-run/node";
import { Form, NavLink, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { sessionStorage } from "../services/session.server";
import AuthForm from "../components/AuthForm";

export async function loader({ request }) {
  // If the user is already authenticated redirect to /events directly
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

  return json({ error, headers }); // return the error message
}

export default function SignIn() {
  // if i got an error it will come back with the loader dxata
  const loaderData = useLoaderData();

  console.log("error:", loaderData?.error);
  return AuthForm({
    error: loaderData?.error?.message,
    isSignUp: false,
  });
}

export async function action({ request }) {
  // Attempt to authenticate the user
  const authenticationResult = await authenticator.authenticate(
    "user-pass",
    request,
    {
      successRedirect: "/events",
      failureRedirect: "/signin",
    }
  );
  return authenticationResult;
}
