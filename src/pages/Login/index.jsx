import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/img";
import BackButton from "../../components/BackButton";
import "../Login/Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ApiBaseUrl } from "../../global/global-variables";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // redirect to homepage if user is already logged in
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  // to submit form when enter in input
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false); // reset error state to false when user types in email input
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false); // reset error state to false when user types in password input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint
      const response = await axios.post(`${ApiBaseUrl}/users/login`, {
        email,
        password,
      });

      // Extract the token from the response
      const token = response.data.data.token;
      const username = response.data.data.name;
      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      setError(false);

      navigate("/");
    } catch (error) {
      console.error("Login failed");
      setError(true);
      // Handle login error (e.g., display an error message)
      // ...
    }
  };

  return (
    <div className="flex flex-col items-center px-4 md:h-screen lg:px-28">
      <div className="relative flex h-[80px] w-full items-center justify-between py-4">
        <BackButton />
        <div className="custom-hover relative -translate-x-8 md:translate-x-0">
          <Link to={"/signup"} className="custom-hover py-2 font-medium ">
            SIGN UP
          </Link>
        </div>
      </div>
      <div className="flex h-[calc(100vh-80px)] w-full  flex-col  items-center justify-evenly lg:px-24">
        <div className="mb-4 text-2xl font-bold">Login into GGStore</div>
        <div className="flex w-full flex-col justify-between md:flex-row">
          {/* LOGIN remove p-2 afterward*/}
          <form onSubmit={handleSubmit} className="flex-1 p-2">
            <div className="">
              <label
                htmlFor="email"
                className="text-xs font-bold text-zinc-500"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onKeyDown={handleKeyDown}
                onChange={handleEmailChange}
                className={`mb-4 w-full border-b ${
                  error ? "border-red-500 bg-red-100" : "border-zinc-300"
                } bg-inherit pt-3 pb-5 focus:border-zinc-600 focus:outline-none`}
                placeholder="name@example.com"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="text-xs font-bold text-zinc-500"
              >
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onKeyDown={handleKeyDown}
                onChange={handlePasswordChange}
                className={`mb-8 w-full border-b ${
                  error ? "border-red-500 bg-red-100" : "border-zinc-300"
                } bg-inherit pr-8 pt-3 pb-5 focus:border-zinc-600 focus:outline-none`}
                placeholder="Password"
              />
              <button className="absolute bottom-1/2 right-1 translate-y-2 rounded-full p-1 hover:bg-zinc-300">
                {}
                <i className="fa-solid fa-eye w-6"></i>
                <i className="fa-solid fa-eye-slash hidden w-6"></i>
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black py-4 text-sm font-semibold text-white duration-300 ease-in-out hover:opacity-80"
            >
              LOG IN
            </button>
          </form>
          {/* DIVIDER */}
          <div className="my-1 flex h-full flex-col items-center">
            <div className="hidden h-full w-[1px] bg-zinc-300 md:block"></div>
            <div className="px-8 py-2 text-xs font-bold text-zinc-500">OR</div>
            <div className="hidden h-full w-[1px] bg-zinc-300 md:block"></div>
          </div>
          {/* OTHER OPTIONS */}
          <div className="flex h-full flex-1 flex-col justify-center px-2 md:px-0">
            <Link className="flex w-full justify-between border border-black p-5">
              <img
                src={images.google}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <div className="text-sm font-medium">Continue with Google</div>
              <div className=""></div>
            </Link>
            <Link className="mt-4 flex w-full justify-between border border-black p-5">
              <img
                src={images.facebook}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <div className="text-sm font-medium">Continue with Facebook</div>
              <div className=""></div>
            </Link>
            <Link className="mt-4 flex w-full justify-between border border-black p-5">
              <i className="fa-regular fa-envelope text-[20px]"></i>
              <div className="text-sm font-medium">Continue with Email</div>
              <div className=""></div>
            </Link>
          </div>
        </div>
        <div className="custom-hover relative mt-4">
          <button className="custom-hover text-center text-sm font-semibold">
            CAN'T LOG IN?
          </button>
        </div>
        <div className="custom-hover mb-4 text-center text-sm text-zinc-400">
          Secure Login with reCAPTCHA subject to Google
        </div>
      </div>
    </div>
  );
}

export default Login;
