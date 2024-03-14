import { Form, useLoaderData, json, Link } from "@remix-run/react";
import Button from "~/components/Button";
import { authenticator } from "../services/auth.server";
import { avatarFromInitials } from "~/components/UserAvatar";
import EventCard from "~/components/EventCard";
import mongoose from "mongoose";

export const meta = () => {
  return [{ title: "FitMeet - Profile" }];
};

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/signin",
  });
  //find all events created by this user
  const createdEvents = await mongoose.models.Event.find({
    creator: user._id,
  })
    .populate("attendees")
    .populate("creator");
  //find all events the user is attending
  const attendingEvents = await mongoose.models.Event.find({
    attendees: user._id,
  })
    .populate("attendees")
    .populate("creator");
  return json({ user, createdEvents, attendingEvents });
}

export async function action({ request }) {
  // Ensure the user is authenticated
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/events",
  });
  // Log the user out
  await authenticator.logout(request, {
    redirectTo: "/signin",
  });
}

export default function Profile() {
  const { user, createdEvents, attendingEvents } = useLoaderData();

  return (
    <>
      <main>
        {/* Settings forms */}
        <div className="divide-y divide-white/5">
          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-black">
                Personal Information
              </h2>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full flex items-center gap-x-8">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt=""
                      className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                    />
                  ) : (
                    avatarFromInitials(
                      user.name,
                      "h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                    )
                  )}
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      defaultValue={user.name}
                      type="text"
                      name="name"
                      id="name"
                      disabled={true}
                      autoComplete="given-name"
                      className="block w-full pl-2 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue={user.mail}
                      disabled={true}
                      className="block w-full pl-2 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-black">
                Log out
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Log out of your account
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"></div>

              <Form method="post" className="mt-8 flex">
                <Button
                  type="submit"
                  value="logout"
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Log out
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-2 mr-4 ml-4">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-black text-center mt-4">
              Events Created
            </h2>
            {createdEvents.map((event) => (
              <Link
                key={event._id}
                className="event-link"
                to={`/events/${event._id}`}
              >
                <EventCard event={event} />
              </Link>
            ))}
          </div>
          <div className="flex-1 pl-4">
            <h2 className="text-2xl font-bold text-black text-center mt-4">
              Events Attending
            </h2>
            {attendingEvents.map((event) => (
              <div key={event._id} className="flex-row items-center mr-4">
                <Link className="event-link" to={`/events/${event._id}`}>
                  <EventCard event={event} />
                </Link>
                {/* Display leave event if on profile page*/}

                <Form
                  action={`${event._id}/leave-event`}
                  className="text-center"
                  method="post"
                >
                  <Button isDelete={true} className=" ">
                    Leave
                  </Button>
                </Form>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
