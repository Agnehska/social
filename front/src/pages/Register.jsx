import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [showPass, setShowPass] = useState(false);

  // fullname, username, email, password, gender
  return (
    <div class="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">
      <form method="POST" action="#">
        <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div class="space-y-4">
            <h1 class="text-center text-2xl font-semibold text-gray-600">
              Register
            </h1>
            <hr />
            <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                class="w-5 h-5 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none w-full"
                type="text"
                name="fullname"
                placeholder="Full name"
                required
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                class="w-5 h-5 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none w-full"
                type="text"
                name="username"
                placeholder="Username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => {setShowPass(!showPass)}}
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none w-full"
                type={showPass ? "text" : "password"}
                name="password"
                id=""
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => {setShowPass(!showPass)}}
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none w-full"
                type={showPass ? "text" : "password"}
                name="password2"
                id=""
                placeholder="Repeat password"
                required
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            value="login"
            id="login"
            class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Register
          </button>
          <hr />
          <div class="flex justify-center items-center mt-4">
            <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span class="ml-2">
                If you have an account you can
                <a href="#" class="text-xs ml-2 text-blue-500 font-semibold">
                  Login &rarr;
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="pt-6 text-base font-semibold leading-7">
          <p class="font-sans text-red-500 text-md hover:text-red-800">
            <a href="/" class="absolute">
              &larr; Home
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
