import mongoose from "mongoose";
import bcrypt from "bcrypt";

// ========== models ========== //

// Create a user schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, // Ensure user passwords are required
      select: false, // Automatically exclude from query results
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    eventsCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    eventsAttending: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

// pre save password hook
userSchema.pre("save", async function (next) {
  const user = this; // this refers to the user document

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next(); // continue
  }

  const salt = await bcrypt.genSalt(10); // generate a salt
  user.password = await bcrypt.hash(user.password, salt); // hash the password

  //Make name all letters after whitepsace uppercase for the name
  user.name = user.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  next(); // continue
});
const User = mongoose.model("User", userSchema);

// create a event schema
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    image: {
      type: String,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);
eventSchema.pre("save", async function (next) {
  const event = this;
  //get the creator of the event
  const creator = await User.findById(event.creator);
  //make sure the user which created the event has the event in their eventsCreated array
  if (!creator.eventsCreated.includes(event._id)) {
    creator.eventsCreated.push(event._id);
    await creator.save();
  }
  event.title = event.title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  next();
});

// Middleware to check expiration date before querying
eventSchema.pre("find", function () {
  this.where({ date: { $gte: new Date() } });
});

const Event = mongoose.model("Event", eventSchema);

export const models = [
  { name: "User", schema: userSchema, collection: "users" },
  { name: "Event", schema: eventSchema, collection: "events" },
];

// ========== initData ========== //

export async function initData() {
  // check if data exists
  const userCount = await mongoose.models.User.countDocuments();
  const eventCount = await mongoose.models.Event.countDocuments();

  if (userCount === 0 || eventCount === 0) {
    await insertData();
  }
}

// ========== insertData ========== //

async function insertData() {
  const User = mongoose.models.User;
  const Event = mongoose.models.Event;
  await User.collection.drop();
  await Event.collection.drop();

  console.log("Inserting data...");
  // Insert users
  const maria = await User.create({
    name: "Maria",
    password: "1234",
    mail: "mlbe@eaaa.dk",
    avatar:
      "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
    eventsCreated: [],
    eventsAttending: [],
  });

  const rasmus = await User.create({
    avatar: "https://share.cederdorff.dk/images/race.webp",
    mail: "race@eaaa.dk",
    name: "Rasmus Cederdorff",
    eventsCreated: [],
    eventsAttending: [],
    password: "1234",
  });

  const anne = await User.create({
    avatar:
      "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp",
    mail: "anki@eaaa.dk",
    name: "Anne Kirketerp",
    eventsCreated: [],
    eventsAttending: [],
    password: "1234",
  });

  const line = await User.create({
    avatar:
      "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
    mail: "lskj@eaaa.dk",
    name: "Line Skjødt",
    password: "1234",
    eventsCreated: [],
    eventsAttending: [],
  });

  const dan = await User.create({
    avatar:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
    mail: "dob@eaaa.dk",
    name: "Dan Okkels Brendstrup",
    eventsCreated: [],
    eventsAttending: [],
    password: "1234",
  });

  // Insert posts
  const event1 = await Event.create({
    title: "Running in the forest",
    description: "We are going to run in the forest",
    image:
      "https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg",
    date: new Date("2024-06-01:20:30:00"),
    location: "Bøge skov",
    creator: maria._id,
    attendees: [rasmus._id, anne._id],
  });

  const event2 = await Event.create({
    title: "Football",
    image:
      "https://images.expertreviews.co.uk/wp-content/uploads/2023/09/best-football-lead-scaled.jpg?width=626&height=352&fit=crop&format=webply",
    description: "We are going to play football",
    date: new Date("2024-06-01:19:30:00"),
    location: "Faarup skole",
    creator: rasmus._id,
    attendees: [maria._id, anne._id],
  });

  const event3 = await Event.create({
    title: "Swimming",
    image:
      "https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg",
    description: "We are going to swim",
    date: new Date("2024-06-01:18:00:00"),
    time: "18:00",
    location: "Hjørring svømmehal",
    creator: anne._id,
    attendees: [maria._id, rasmus._id],
  });
  const event4 = await Event.create({
    title: "Running in the forest",
    description: "We are going to run in the forest",
    image:
      "https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg",
    date: new Date("2024-06-01:22:30:00"),
    time: "20:00",
    location: "Bøge skov",
    creator: maria._id,
    attendees: [rasmus._id, anne._id],
  });
}
