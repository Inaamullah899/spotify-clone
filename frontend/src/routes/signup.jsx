import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (email != confirmEmail) {
      alert("Email and confirm Email must be matched");
      return;
    }
    if (password != confirmPassword) {
      alert("Password and confirm Password must be matched");
      return;
    }
    const data = { userName, email, confirmEmail, password, confirmPassword };
    const resp = axios.post("http://localhost:3000/users/add", data);
    console.log(resp + "success");
    console.log(data);
  };
  return (
    <>
      <>
        {/* logo bar */}
        <div className="w-full sticky top-0 h-24 bg-black border-2 border-solid border-black">
          <Icon className="flex ml-20 mt-6" icon="logos:spotify" width="130" />
        </div>
        {/* form */}
        <div className="flex justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... ">
          <div className="flex flex-col h-full mt-10 w-3/6 rounded-lg bg-black">
            <div>
              <h1 className="text-white font-bold text-center mt-10  text-5xl">
                Sign up to start listening
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-96  mt-10 border-b border-solid border-gray-300"></div>
            </div>

            <form className="flex flex-col  items-center  mt-16  " action="">
              <div className="flex flex-col gap-2">
                <label className="text-white" htmlFor="">
                  Username
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white" htmlFor="">
                  Email or username
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white" htmlFor="">
                  Confirm Email
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="email"
                  placeholder="Confirm Email"
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <label className="text-white" htmlFor="">
                  Password
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <label className="text-white" htmlFor="">
                  Confirm Password
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>

              <button
                className="bg-green-500 p-2 w-80 rounded-3xl mt-20"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  signUp();
                }}
              >
                Sing Up
              </button>

              <div className="w-96  mt-10 border-b border-solid border-gray-300"></div>
            </form>
            <div>
              <h1 className="text-center text-gray-500 mt-5  text-xl">
                Already have an account?
              </h1>
              <p className="text-white hover:text-green-500 text-center   text-xl">
                <Link to="/login">login to Spotify</Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default SignUp;
