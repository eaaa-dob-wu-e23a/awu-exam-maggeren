import { json } from "@remix-run/node";
import { Form, Link, useLoaderData, useSubmit } from "@remix-run/react";
import mongoose from "mongoose";
import EventCard from "../components/EventCard";
import { authenticator } from "../services/auth.server";

export const meta = () => {
  return [{ title: "FitMeet - Meetups" }];
};
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const sortBy = url.searchParams.get("sort-by") || "createdAt";
  const orOptions = [
    { title: { $regex: q, $options: "i" } },
    { location: { $regex: q, $options: "i" } },
  ];

  const sortOption = {};
  sortOption[sortBy] = sortBy === "date" ? 1 : -1;

  let events;
  if (sortBy === "attendees") {
    events = await mongoose.models.Event.aggregate([
      {
        $match: {
          $or: orOptions,
        },
      },
      {
        $addFields: {
          attendeesCount: { $size: "$attendees" },
        },
      },
      {
        $sort: { attendeesCount: sortOption[sortBy] },
      },
      {
        $limit: 100,
      },
    ]);
    events = await mongoose.models.Event.populate(events, {
      path: "attendees",
    });
  } else {
    events = await mongoose.models.Event.find({
      $or: orOptions,
    })
      .sort(sortOption)
      .populate("creator")
      .populate("attendees")
      .limit(100);
  }
  return json({ events, q, sortBy });
}

export default function Index() {
  const { events, q } = useLoaderData();
  const submit = useSubmit();

  function handleSearchFilterAndSort(event) {
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
        <div className="flex flex-col md:flex-row items-start justify-center space-y-4 md:space-y-0">
          <div className="mb-14 flex flex-row space-x-3">
            <div className="flex-col">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Search
              </label>
              <input
                className="border border-gray-300 text-center rounded-md h-10 align-top"
                aria-label="Search by caption"
                defaultValue={""}
                placeholder="Search"
                type="search"
                name="q"
              />
            </div>
            <div className="h-10 text-left">
              <label className="block text-sm text-center font-medium text-gray-600 mb-1">
                Sort By
              </label>
              <select
                className="border border-gray-300 rounded-md px-7 py-2 h-full align-top"
                name="sort-by"
                defaultValue={"Newest"}
              >
                <option value="createdAt">Newest</option>
                <option value="date">Expiration</option>
                <option value="attendees">Attendees</option>
              </select>
            </div>
          </div>
        </div>
      </Form>
      <section className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-2 mr-4 ml-4">
        {events.map((event) => (
          <EventCard event={event} key={event._id} />
        ))}
      </section>
    </div>
  );
}
