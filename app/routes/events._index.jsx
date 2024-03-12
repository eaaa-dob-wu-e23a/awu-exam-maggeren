import { json } from "@remix-run/node";
import { Form, Link, useLoaderData, useSubmit } from "@remix-run/react";
import mongoose from "mongoose";
import EventCard from "../components/EventCard";
import { authenticator } from "../services/auth.server";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const meta = () => {
  return [{ title: "Meetups" }];
};

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request);

  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const sortBy = url.searchParams.get("sort-by") || "createdAt";
  const filterTag = url.searchParams.get("tag") || "";

  // Assuming you want to sort in ascending order.
  // If you need descending order for some fields, you might need to adjust the logic accordingly.
  const sortOption = {};
  sortOption[sortBy] = -1; // Use -1 here if you want to sort in descending order by default
  const query = {
    $or: [
      { title: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
    ],
  };
  const events = await mongoose.models.Event.find(query)
    .sort(sortOption)
    .populate("creator")
    .populate("attendees");

  return json({ events, q, sortBy, filterTag });
}

export default function Index() {
  const { events, q, sortBy, filterTag } = useLoaderData();
  console.log("events:", events);
  const submit = useSubmit();

  function handleSearchFilterAndSort(event) {
    console.log("event:", event);
    const isFirstSearch = q === null;
    submit(event.currentTarget, {
      replace: !isFirstSearch,
    });
  }

  return (
    <div className="page">
      <Form
        className="grid-filter mx-auto mt-4 text-center"
        id="search-form"
        role="search"
        onChange={handleSearchFilterAndSort}
      >
        <div className="flex flex-col md:flex-row items-start justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="mb-14 flex flex-row space-x-3">
            <div className="flex-col">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Search
              </label>
              <input
                className="border border-gray-300 text-center rounded-md h-auto align-top"
                aria-label="Search by caption"
                defaultValue={""}
                placeholder="Search"
                type="search"
                name="q"
              />
            </div>
            <div className="mb-4 h-10 text-left">
              <label className="block text-sm text-center font-medium text-gray-600 mb-1">
                Sort By
              </label>
              <select
                className="border border-gray-300 rounded-md px-7 py-2 h-full align-top"
                name="sort-by"
                defaultValue={"Newest"}
              >
                <option value="createdAt">Newest</option>
                <option value="time">Expiration</option>
                <option value="attendee">Attendees</option>
              </select>
            </div>
          </div>
        </div>
      </Form>
      <section className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-2 mr-4 ml-4">
        {events.map((event) => (
          <Link key={event._id} className="event-link" to={`${event._id}`}>
            <EventCard event={event} />
          </Link>
        ))}
      </section>
    </div>
  );
}
