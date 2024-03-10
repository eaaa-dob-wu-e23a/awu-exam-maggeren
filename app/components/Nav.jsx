import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useMatch } from "@remix-run/react";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <NavLink
                    to="/events"
                    className={({ isActive }) => {
                      return isActive
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
              <div
                className="absolute inset-y-0 right-0 flex ite
              ms-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <NavLink to="/profile" className="text-gray-500">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="profile"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function CustomNavLink({ to }) {
  const match = useMatch(to);

  return (
    <NavLink
      to={to}
      className={`inline-flex items-center border-white border-b-2 px-1 pt-1 text-sm font-medium ${
        match
          ? "text-gray-900 border-indigo-500 focus:border-indigo-500 focus:text-indigo-700"
          : "text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:border-indigo-500 focus:text-indigo-700"
      }`}
    ></NavLink>
  );
}
