import { redirect } from "@remix-run/node";
import { Form, json, useActionData, useNavigation } from "@remix-run/react";
import validateEvent from "../services/event-validation";
import mongoose from "mongoose";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { uploadImage } from "../services/upload-handler.server";

import Calendar from "../components/Calendar";
export const meta = () => {
  return [{ title: "FitMeet - New meetup" }];
};

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/events",
  });
  return json({ user });
}

export default function AddEvent({ entry }) {
  const actionData = useActionData();
  let navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setIsSubmitting(
      navigation.state === "submitting" || navigation.state === "loading"
    );
  }, [navigation.state]);

  const errors = actionData?.errors ?? null;
  const [image, setImage] = useState(entry?.image ? entry?.image : null);

  const [selectedDate, setSelectedDate] = useState();
  const { user } = useLoaderData();

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
              className="block w-full mb-4 pl-2 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md pl-2 border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
          <Calendar className="ml-20 w-full" onDateClick={handleDateClick} />
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
            {isSubmitting ? "Creating..." : "Create Meetup"}
          </Button>
        </div>
      </Form>
    </>
  );
}
export async function action({ request }) {
  //make sure user is authenticated
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/events",
  });
  const formData = await request.formData();
  const image = formData.get("image");
  const { errors, dateTime } = validateEvent({ formData });

  if (errors && Object.keys(errors).length > 0) {
    return json({ errors });
  }
  let imageUrl = "";
  if (formData.get("image") && image.size > 0) {
    imageUrl = await uploadImage(image);
  }

  const event = await new mongoose.models.Event({
    date: dateTime,
    title: formData.get("title"),
    image: imageUrl,
    description: formData.get("description"),
    location: formData.get("location"),
    creator: formData.get("creator"),
  });

  const isSaved = await event.save();
  if (isSaved) {
    return redirect("/events");
  } else {
    throw new Error("Failed to save event");
  }
}
