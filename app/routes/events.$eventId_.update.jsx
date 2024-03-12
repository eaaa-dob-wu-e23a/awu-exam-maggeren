import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import mongoose from "mongoose";
import { useState } from "react";
import { authenticator } from "../services/auth.server";
import Calendar from "../components/Calendar";

export function meta() {
  return [
    {
      title: "FitMeet - Update Event",
    },
  ];
}

export async function loader({ request, params }) {
  const authUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/s",
  });
  const event = await mongoose.models.Event.findById(params.eventId).populate(
    "creator"
  );

  if (authUser._id != event.creator._id) {
    return redirect(`/events/${params.eventId}`);
  }

  return json({ event });
}

export default function UpdateEvent() {
  const { event } = useLoaderData();
  const dateString = "2024-03-06T23:00:00.000Z";
  const dateObject = new Date(dateString);

  // Get hours and minutes
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // Format the time string
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const user = event.creator;
  const [image, setImage] = useState(event.image ?? null);
  const [selectedDate, setSelectedDate] = useState(
    event.date ? new Date(event.date) : ""
  );
  const [location, setLocation] = useState(event.location ?? "");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // image file size must be below 0,5MB
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size must be less than 0.5MB.");
      event.target.value = "";
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-black mt-10 mb-4 text-center">
        Update Meetup
      </h1>
      <Form
        method="post"
        className="mt-4 flex-col items-center justify-center"
        encType="multipart/form-data"
      >
        <div id="upper-div" className="flex justify-center mt-8">
          <div
            id="text-div"
            className="w-full flex flex-col justify-center ml-10 mr-10"
          >
            <label className="block text-lg mb-2 text-gray-700 text-center">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={event.title ?? ""}
              className="block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <label
              className="block text-lg mb-2 text-gray-700 text-center mt-2"
              htmlFor="text"
            >
              Description
            </label>
            <textarea
              id="text"
              defaultValue={event.description ?? ""}
              name="description"
              className="block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            ></textarea>

            <label className="block text-lg mb-2 text-gray-700 text-center mt-2">
              Location
            </label>
            <input
              id="location"
              type="adress"
              name="location"
              defaultValue={event.location ?? ""}
              className="block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <div id="image-div" className="w-full flex justify-center mt-10">
            <input
              className="hidden"
              id="file_input"
              name="image"
              type="file"
              onChange={handleImageChange}
            />
            <img
              id="image-preview"
              className="cursor-pointer w-72 h-60 object-cover rounded-lg"
              src={
                image
                  ? image
                  : "https://placehold.co/600x400/F1F5F9/000000?text=Upload+an+image"
              }
              alt="Choose"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400?text=Error+loading+image")
              }
              onClick={() => document.getElementById("file_input").click()}
            />
          </div>
        </div>
        <input name="creator" type="hidden" value={user._id ?? ""} />
        <div className="mt-6 flex items-center">
          <Calendar
            selectedDate={selectedDate}
            className="ml-20 w-full"
            onDateClick={handleDateClick}
          />
          <input name="date" type="hidden" value={selectedDate ?? ""} />

          <div className="ml-8 flex flex-col items-center w-full">
            <label
              className="block text-lg mb-2 text-gray-700 text-center"
              htmlFor="time"
            >
              Time
            </label>

            <input
              id="time"
              defaultValue={formattedTime ?? ""}
              type="time"
              name="time"
              className="p-3 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            Update Meetup{" "}
          </button>
        </div>
      </Form>
    </>
  );
}
export async function action({ request, params }) {
  // Protect the route
  const authUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/events",
  });

  // Fetch the post to check if the current user is the creator
  const postToUpdate = await mongoose.models.Post.findById(params.postId);

  if (postToUpdate.user.toString() !== authUser._id.toString()) {
    // User is not the creator of the post, redirect
    return redirect(`/posts/${params.postId}`);
  }

  // User is authenticated and is the creator, proceed to update the post
  const formData = await request.formData();
  const post = Object.fromEntries(formData);

  // Since postToUpdate is already the document you want to update,
  // you can directly modify and save it, which can be more efficient than findByIdAndUpdate
  postToUpdate.caption = post.caption;
  postToUpdate.image = post.image;
  await postToUpdate.save();

  return redirect(`/posts/${params.postId}`);
}
