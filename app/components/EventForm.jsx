import { Form, useNavigate, json } from "@remix-run/react";
import { useState } from "react";
import Calendar from "../components/Calendar";
import { authenticator } from "../services/auth.server";
import { uploadImage } from "../services/upload-handler.server";

function EventForm({
  onSubmit,
  initialValues = {},
  submitButtonText = "Create Meetup",
}) {
  const [image, setImage] = useState(initialValues.image || null);
  const [selectedDate, setSelectedDate] = useState(initialValues.date || null);
  const [location, setLocation] = useState(initialValues.location || "");

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
    <Form
      method="post"
      className="mt-4 flex-col items-center justify-center"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      {/* ... rest of the form elements ... */}

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center"
        >
          {submitButtonText}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
