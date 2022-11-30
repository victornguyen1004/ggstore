import { Link } from "react-router-dom";
import images from "../../assets/img";

function Navbar() {
  return (
    <div className="flex h-[80px] items-center justify-between px-28 py-4 text-black">
      <Link className="w-28" to={"https://fb.com/nqv.ilb"}>
        <img src={images.logoFull} alt="logo.png" className="" />
      </Link>

      <div className="flex items-center">
        <Link to={"/"} className="mr-2 px-4 py-2 font-semibold">
          Home
        </Link>
        <Link to={"/about"} className="mr-2 px-4 py-2 font-semibold">
          About us
        </Link>
        <Link to={"/product"} className="mr-2 px-4 py-2 font-semibold">
          Product
        </Link>
        <Link to={"/contact"} className="px-4 py-2 font-semibold">
          Contact
        </Link>
      </div>
      <div className="text-mg font-bold">
        <button className="mr-4 rounded-3xl border-2 border-blue-500 bg-blue-500 py-2 px-6 text-white shadow duration-300 ease-in-out hover:bg-white hover:text-blue-500">
            <Link to={"/signup"} className="">Sign up</Link>
        </button>
        <button className="rounded-3xl border-2 border-white px-4 py-2 text-blue-500 duration-300 ease-in-out  hover:border-[#f3f5f9] hover:bg-[#f3f5f9]">
          <Link to={"/login"} className="">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
