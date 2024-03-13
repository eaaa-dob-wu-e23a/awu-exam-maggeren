// Inspired by https://remix.run/docs/en/main/guides/form-validation

export default function validateEvent({ formData }) {
  let title = formData.get("title");
  let description = formData.get("description");
  let date = formData.get("date");
  let time = formData.get("time");
  let location = formData.get("location");
  let image = formData.get("image");
  let errors = {};

  // do some validation, errors are saved in the sessionErrorKey
  if (!title || typeof title !== "string" || !title.trim()) {
    errors.title = "Title is required and must be a string";
  }

  if (!location || typeof location !== "string" || !location.trim()) {
    errors.location = "Location is required and must be a string";
  }
  if (!description || typeof description !== "string" || !description.trim()) {
    errors.description = "Description is required and must be a string";
  }
  if (!time || typeof time !== "string" || !time.trim()) {
    errors.time = "Time is required";
  }

  if (!date || typeof date !== "string" || !date.trim()) {
    errors.date = "You need to pick a date";
  }
  if (image && image.size > 500000) {
    errors.image = "Image size must be less than 0.5MB";
  }

  const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
  if (image && image.size > 0 && !allowedImageTypes.includes(image.type)) {
    errors.image = "Image must be a jpeg, png or gif";
  }
  //make sure image is typeof file
  if (image && image.size > 0 && !(image instanceof File)) {
    errors.image = "Image must be a file";
  }
  // Create a new Date object with the provided date string
  let dateTime = new Date(date);
  const [hours, minutes] = time.split(":");

  // Set the hours and minutes from the time string
  dateTime.setHours(hours);
  dateTime.setMinutes(minutes);

  //make sure event is at least 6 hours in the future
  if (
    dateTime < new Date(Date.now() + 6 * 60 * 60 * 1000) &&
    errors.date === undefined
  ) {
    errors.date = "Event date must be at least 6 hours in the future";
  }
  return { errors, dateTime };
}
