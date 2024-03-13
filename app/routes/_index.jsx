import { redirect } from "@remix-run/node";
export const meta = () => {
  return [{ title: "FitMeet" }];
};

export async function loader({ request }) {
  return redirect("/events");
}
