import { Link } from "react-router-dom";
import images from "../../assets/img";
import BackButton from "../../components/BackButton";
import "../Login/Login.css";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center px-28">
      <div className="relative flex h-[80px] w-full items-center justify-between py-4">
        <BackButton />
        <div className="custom-hover relative">
          <Link to={"/signup"} className="custom-hover py-2 font-medium">
            SIGN UP
          </Link>
        </div>
      </div>
      <div className="flex h-[calc(100vh-80px)] w-full min-w-[720px] max-w-[840px] flex-col items-center justify-evenly">
        <div className="text-2xl font-bold">Login into GGStore</div>
        <div className="flex w-full justify-between">
          {/* LOGIN remove p-2 afterward*/}
          <div className="flex-1 p-2">
            <div className="z">
              <label
                htmlFor="email"
                className="text-xs font-bold text-zinc-500"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="mb-4 w-full border-b border-zinc-300 pt-3 pb-5 focus:border-zinc-600 focus:outline-none"
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
                className="mb-8 w-full border-b border-zinc-300 pr-8 pt-3 pb-5 focus:border-zinc-600 focus:outline-none"
                placeholder="Password"
              />
              <button className="absolute bottom-1/2 right-1 translate-y-2 rounded-full p-1 hover:bg-zinc-300">
                {}

                <i class="fa-solid fa-eye w-6"></i>
                <i class="fa-solid fa-eye-slash hidden w-6"></i>
              </button>
            </div>
            <button className="w-full bg-black py-4 text-sm font-semibold text-white duration-300 ease-in-out hover:opacity-80">
              LOG IN
            </button>
          </div>
          {/* DIVIDER */}
          <div className="flex h-full flex-col items-center">
            <div className="h-full w-[1px] bg-zinc-300"></div>
            <div className="px-8 py-2 text-xs font-bold text-zinc-500">OR</div>
            <div className="h-full w-[1px] bg-zinc-300"></div>
          </div>
          {/* OTHER OPTIONS */}
          <div className="flex h-full flex-1 flex-col justify-center">
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
        <div className="custom-hover relative">
          <button className="custom-hover text-center text-sm font-semibold">
            CAN'T LOG IN?
          </button>
        </div>
        <div className="custom-hover text-center text-sm text-zinc-400">
          Secure Login with reCAPTCHA subject to Google
        </div>
      </div>
    </div>
  );
}

export default Login;
