import { authenticator } from "../services/auth.server";

export const meta = () => {
  return [{ title: "Remix Post App" }];
};

export async function loader({ request }) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/events",
    failureRedirect: "/signin",
  });
}
