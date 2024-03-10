import { createCookieSessionStorage } from "@remix-run/node";
import bcrypt from "bcrypt";

// Generate the secret outside the configuration
const secret = await generateSecret();

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;

// Function to generate a secret
async function generateSecret() {
  const saltRounds = 10;
  const randomString = await bcrypt.genSalt(saltRounds);
  return randomString;
}
