import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStores } from "../stores";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { useNotification } from "../assets/hooks/useNotification";

const Login = observer(() => {
  const loginSuccess = useNotification('Authorization success',  'success');
  const loginFailed = useNotification('Authorization failed',  'warning');

  const navigate = useNavigate();
  const { userStore } = useStores();
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState({
    fullname:'',
    username: '',
    email: '',
    password: ''
  });
  const { register, formState: {
    errors,
  } } = useForm({mode: "onBlur"});

  async function loginHandler (e){
    e.preventDefault();
    const err = await userStore.loginUser(userData)

    if (err === '') {
      navigate('/profile');
      loginSuccess()
    } else {
      loginFailed()
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">
      <form method="POST" action="#">
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Login
            </h1>
            <hr />
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Неверный формат e-mail."
                  }
                })}
                placeholder="Email"
                required
                value={userData.email}
                onChange={(event) => setUserData({...userData, email: event.target.value})}
              />
              
            </div>
            <div className="font-sans text-red-500">
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => {setShowPass(!showPass)}}
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type={showPass ? "text" : "password"}
                name="password"
                id=""
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 8,
                    message: "Минимум 8 символов."
                  }
                })}
                placeholder="Password"
                required
                value={userData.password}
                onChange={(event) => setUserData({...userData, password: event.target.value})}
              />
            </div>
            <div className="font-sans text-red-500">
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <p className="font-sans text-red-500">{userStore.errorBack}</p>
          </div>
          <button
            type="submit"
            value="login"
            id="login"
            onClick={loginHandler}
            className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Login
          </button>
          <hr />
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">
                You don't have an account?
                <Link to="/register" className="text-xs ml-2 text-blue-500 font-semibold">
                  Register now &rarr;
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="pt-6 text-base font-semibold leading-7">
          <p className="font-sans text-red-500 text-md hover:text-red-800">
            <a href="/" className="absolute">
              &larr; Home
            </a>
          </p>
        </div>
      </form>
    </div>
  );
});

export default Login;
