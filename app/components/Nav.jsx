import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData, useLocation, NavLink } from "@remix-run/react";
import { avatarFromInitials } from "./UserAvatar";

export async function loader({ request, params }) {
  const user = await authenticator.isAuthenticated(request);
  return json({ user });
}

export default function NavBar({}) {
  let location = useLocation();
  const user = useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="fixed inset-x-0 top-0 flex h-16 justify-between items-center bg-white">
          {/* Left Section */}
          <div className="flex items-center flex-shrink-0">
            {/* FitMeet Logo */}
            <NavLink
              to="/events"
              className="text-2xl font-bold text-black-700 ml-4 mr-2"
            >
              FitMeet
            </NavLink>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                to="/events"
                className={() => {
                  return location.pathname === "/events"
                    ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-indigo-700 hover:border-gray-300 hover:text-gray-700"
                    : "inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
                }}
              >
                Find a Meetup
              </NavLink>
              <NavLink
                to="/add-event"
                className={({ isActive }) => {
                  return isActive
                    ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-indigo-700 hover:border-gray-300 hover:text-gray-700"
                    : "inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
                }}
              >
                Create a Meetup
              </NavLink>
            </div>
          </div>

          <div className="flex-grow flex justify-end items-center mr-4">
            {/* Profile dropdown */}
            <NavLink to="/profile">
              {user.avatar ? (
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover"
                  src={user.avatar}
                  alt="profile"
                />
              ) : (
                <div className="mt-3">{avatarFromInitials(user.name)}</div>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export function NotSignedIn() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="fixed inset-x-0 top-0 flex h-16 justify-between items-center bg-white">
        {/* Left Section */}

        {/* FitMeet Logo */}
        <NavLink
          to="/events"
          className="text-2xl font-bold text-black-700 ml-4 mr-2"
        >
          FitMeet
        </NavLink>
        <div className="flex-grow flex justify-end items-center mr-4">
          <NavLink
            to="/signin"
            className="text-black text-1xl font-bold text-black-700"
          >
            Sign in
          </NavLink>
        </div>
        <div />
      </div>
    </div>
  );
}
