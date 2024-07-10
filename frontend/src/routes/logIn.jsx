import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    try {
      const data = { email, password };
      const resp = await axios.post("http://localhost:3000/users/login", data);
      console.log(resp.data + " success");
      console.log(data);

      if (resp.data.success) {
        {
          setLoggedIn(true);
          navigate("/loginhome");
        }
      } else {
        console.log("Login failed");
        console.log(resp.data);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      {/* logo bar */}
      <div className="w-full h-24 sticky top-0 bg-black border-2 border-solid border-black">
        <Icon className="flex ml-20 mt-6" icon="logos:spotify" width="130" />
      </div>
      {/* form */}
      <div className="flex justify-center  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... ">
        <div className="flex flex-col h-full mt-10 w-3/6 rounded-lg  bg-black">
          <div>
            <h1 className="text-white font-bold text-center mt-10  text-5xl">
              Log in to Spotify
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-96  mt-10 border-b border-solid border-gray-300"></div>
          </div>

          <form className="flex flex-col  items-center  mt-16  " action="">
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor="">
                Email
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

            <button
              className="bg-green-500 p-2 w-80 rounded-3xl mt-20"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              Login
            </button>

            <div className="w-96  mt-10 border-b border-solid border-gray-300"></div>
          </form>
          <div>
            <h1 className="text-center text-gray-500 mt-5  text-xl">
              Don't have an account?
            </h1>
            <p className="text-white hover:text-green-500 text-center   text-xl">
              <Link to="/signup">Sign up for spotify</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;
