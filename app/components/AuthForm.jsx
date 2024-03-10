import { Form, NavLink } from "@remix-run/react";
const AuthForm = ({ error, isSignUp }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Sign up" : "Sign in"}
        </h1>
        <Form
          id={isSignUp ? "sign-up-form" : "sign-in-form"}
          method="post"
          className="mx-auto w-full max-w-sm flex flex-col justify-center" // BEGIN: Center the form and change flex direction
        >
          {isSignUp && (
            <>
              <label htmlFor="name" className="block mt-4">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                aria-label="name"
                placeholder="Type your name..."
                required
                autoComplete="off"
                className="border border-gray-300 rounded-md px-2 py-1 mt-1"
              />
            </>
          )}
          <label htmlFor="email" className="block mt-4">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="mail"
            aria-label="email"
            placeholder="Type your email..."
            required
            autoComplete="on"
            className="border border-gray-300 rounded-md px-2 py-1 mt-1"
          />

          <label htmlFor="password" className="block mt-4">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            aria-label="password"
            placeholder="Type your password..."
            autoComplete="current-password"
            className="border border-gray-300 rounded-md px-2 py-1 mt-1"
          />

          <div className="btns mt-5">
            <button className="bg-blue-600 text-white rounded-md py-1 w-full">
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </div>

          {error && (
            <div className="error-message mt-4">
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            </div>
          )}
        </Form>

        <p className="mt-4 text-center text-gray-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <NavLink
            to={isSignUp ? "/signin" : "/signup"}
            className="text-blue-600"
          >
            {isSignUp ? "Sign in here." : "Sign up here."}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
