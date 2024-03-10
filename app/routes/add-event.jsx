import { redirect } from "@remix-run/node";
import { Form, useNavigate, json } from "@remix-run/react";
import mongoose, { set } from "mongoose";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { uploadImage } from "../services/upload-handler.server";
import Calendar from "../components/Calendar";
export const meta = () => {
  return [{ title: "Add new meetup" }];
};

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/events",
  });
  return json({ user });
}

export default function AddEvent({ entry }) {
  const [image, setImage] = useState(entry?.image ? entry?.image : null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const { user } = useLoaderData();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (location) => {
    setLocation(location);
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
        Create A New Meetup
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
          <Calendar className="ml-20 w-full" onDateClick={handleDateClick} />
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
              type="time"
              name="time"
              defaultValue="00:00"
              className="p-3 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            Create Meetup
          </button>
        </div>
      </Form>
    </>
  );
}
//AIzaSyDxB8JlcODiXcIEfBxtAZNYcp3Sj-3ce4o
export async function action({ request }) {
  //get form data from request
  const formData = await request.formData();

  const { time, date, image, title, description, creator, location } =
    Object.fromEntries(formData);

  // Check for the presence and types of the text fields
  if (
    typeof date !== "string" ||
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof time !== "string" ||
    !image // Directly check for file presence, no need to check type
  ) {
    throw new Error("Bad request");
  }

  // Assuming imageFile is a File object now, we can properly work with it
  if (image instanceof File) {
    // Ensure imageFile is handled as a File
    const imageUrl = await uploadImage(image);

    const event = new mongoose.models.Event({
      date: date,
      title,
      image: imageUrl,
      description,
      location,
      creator,
    });

    const isSaved = await event.save();
    if (isSaved) {
      return redirect("/events");
    } else {
      throw new Error("Failed to save event");
    }
  } else {
    throw new Error("Image file is missing or invalid");
  }
}
