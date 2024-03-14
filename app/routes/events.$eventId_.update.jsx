import { json, redirect } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useNavigation,
  useActionData,
} from "@remix-run/react";
import mongoose from "mongoose";
import { useState, useEffect } from "react";
import { authenticator } from "../services/auth.server";
import Calendar from "../components/Calendar";
import Button from "../components/Button";
import validateEvent from "../services/event-validation";
import { uploadImage, deleteImage } from "../services/upload-handler.server";
export function meta() {
  return [
    {
      title: "FitMeet - Update Event",
    },
  ];
}

export async function loader({ request, params }) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: request.url,
  });
  const event = await mongoose.models.Event.findById(params.eventId).populate(
    "creator"
  );

  if (user._id != event.creator._id) {
    return redirect(`/events/${params.eventId}`);
  }

  return json({ event, user });
}

export default function updateEvent() {
  const actionData = useActionData();

  const { event, user } = useLoaderData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  let navigation = useNavigation();
  useEffect(() => {
    setIsSubmitting(
      navigation.state === "submitting" || navigation.state === "loading"
    );
  }, [navigation.state]);

  // Get hours and minutes from the Date object
  const eventDate = new Date(event.date);
  const hours = eventDate.getHours().toString().padStart(2, "0");
  const minutes = eventDate.getMinutes().toString().padStart(2, "0");
  console.log(eventDate, hours, minutes);
  // Combine hours and minutes in "hh:mm" format
  const formattedTime = `${hours}:${minutes}`;
  const errors = actionData?.errors ?? null;
  const [image, setImage] = useState(event.image ?? null);

  const [selectedDate, setSelectedDate] = useState(eventDate ?? null);

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
            <div className="flex-row space-x-4">
              <label className="inline text-lg mb-2 text-gray-700 text-start">
                Title
              </label>
              {errors?.title && (
                <p className="inline text-red-500 text-sm">{errors.title}</p>
              )}
            </div>
            <input
              id="title"
              type="text"
              name="title"
              className="block w-full mb-4 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              defaultValue={event?.title}
            />

            <div className="flex-row space-x-4">
              <label className="inline text-lg mb-2 text-gray-700 text-start">
                Description
              </label>
              {errors?.description && (
                <p className="inline text-red-500 text-sm">
                  {errors.description}
                </p>
              )}
            </div>

            <textarea
              id="text"
              name="description"
              className="block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              defaultValue={event?.description}
            ></textarea>

            <div className="flex-row space-x-4">
              <label className="inline text-lg mb-2 text-gray-700 text-start">
                Location
              </label>
              {errors?.title && (
                <p className="inline text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
            <input
              id="location"
              type="adress"
              name="location"
              className="block w-full pl-2 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              defaultValue={event?.location}
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
            <div className="flex flex-col items-center">
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
              {errors?.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
          </div>
        </div>
        <input name="creator" type="hidden" value={user._id ?? ""} />
        <div className="mt-6 flex items-center">
          <Calendar
            className="ml-20 w-full"
            onDateClick={handleDateClick}
            selectedDate={eventDate}
          />
          {errors?.date && (
            <p className="text-red-500 text-sm ml-2">{errors.date}</p>
          )}

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
              className="p-3 border border-gray-300 rounded"
              defaultValue={formattedTime}
            />
            {errors?.time && (
              <p className="text-red-500 text-sm">{errors.time}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
        </div>
      </Form>
    </>
  );
}
export async function action({ request, params }) {
  // Protect the route
  const authUser = await authenticator.isAuthenticated(request, {
    failureRedirect: request.url,
  });

  // Fetch the event to check if the current user is the creator
  const eventToUpdate = await mongoose.models.Event.findById(params.eventId);
  if (eventToUpdate.creator._id.toString() !== authUser._id.toString()) {
    // User is not the creator of the event, redirect
    return redirect(`/events/${params.eventId}`);
  }

  const formData = await request.formData();
  const image = formData.get("image");
  const { errors, dateTime } = validateEvent({ formData });

  if (errors && Object.keys(errors).length > 0) {
    return json({ errors });
  }
  let imageUrl = "";

  // Check if the image has been changed
  if (image && image.size > 0 && image.name !== eventToUpdate.image) {
    // Delete the old image
    await deleteImage(eventToUpdate.image);
    imageUrl = await uploadImage(image);
  } else {
    // Use the existing image URL
    console.log("Using existing image");
    imageUrl = eventToUpdate.image;
  }

  eventToUpdate.date = dateTime;
  eventToUpdate.title = formData.get("title");
  eventToUpdate.image = imageUrl;
  eventToUpdate.description = formData.get("description");
  eventToUpdate.location = formData.get("location");
  await eventToUpdate.save();
  return redirect(`/events/${params.eventId}`);
}
