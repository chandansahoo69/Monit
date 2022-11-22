import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkEmail = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      setError("Email is not valid");
      console.log(error);
      return false;
    }
    return true;
  };

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      //   setError("Is Strong Password");
    } else {
      setError("Is Not Strong Password");
    }
  };

  const login = () => {
    if (checkEmail() && !validatePassword(password)) {
      console.log(email, password);
      navigate("/employee");
    }
  };

  return (
    <>
      <div className="relative">
        <svg
          className="absolute z-10 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,165.3C640,160,800,96,960,69.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="absolute z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
        >
          <path
            fill="#CFE0FD"
            fill-opacity="1"
            d="M0,0L80,16C160,32,320,64,480,106.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <h1 className="absolute sm:mt-6 mt-14 left-1/2 -translate-x-1/2  md:left-1/4 z-30 md:text-white text-sky-500 lg:text-8xl md:text-6xl text-5xl font-bold ">
          Monit
        </h1>
      </div>

      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center lg:mt-32">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Email Address/Employee ID"
            />
          </div>
          {error === "" ? (
            ""
          ) : error !== "Email is not valid" ? (
            ""
          ) : (
            <span className="text-red-500 mb-4">{error}</span>
          )}

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />
            {/* {error === "" && <span className="text-red-500">{error}</span>} */}
          </div>
          <div className="w-3/4 flex flex-row gap-3">
            <div>
              <button className="text-blue-400 hover:text-blue-500 font-semibold">
                Forgot Password?
              </button>
            </div>
            <div className=" flex items-center gap-x-1">
              <span className="text-sm text-slate-400">Contact Admin</span>
            </div>
          </div>
          <div className="w-3/4 mt-4">
            <button
              onClick={login}
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
