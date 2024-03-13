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
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-white text-sm ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {user.avatar ? (
                    <img
                      className="h-10 w-10 rounded-full mt-3"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="profile"
                    />
                  ) : (
                    <div className="mt-3">{avatarFromInitials(user.name)}</div>
                  )}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/profile"
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Your Profile
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
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
