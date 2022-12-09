import { Link } from "react-router-dom";
import images from "../../assets/img";

function Navbar() {
  return (
    <div className="flex h-[80px] items-center justify-between px-12 lg:px-28  text-black">
      <Link className="w-28" to={""}>
        <img src={images.logoFull} alt="logo.png" className="" />
      </Link>

      <div className="hidden items-center font-semibold lg:flex">
        <Link to={"/"} className="mr-2 px-4 py-3">
          Home
        </Link>
        <Link to={"/about"} className="mr-2 px-4 py-3">
          About us
        </Link>
        <Link to={"/product"} className="mr-2 px-4 py-3">
          Product
        </Link>
        <Link to={"/contact"} className="px-4 py-3">
          Contact
        </Link>
      </div>
      <div className="md:block hidden text-mg font-bold">
        <Link
          to={"/signup"}
          className="mr-4 rounded-3xl border-2 border-blue-500 bg-inherit py-2 px-6 text-blue-500 shadow-sm duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
        >
          Sign up
        </Link>
        <Link
          to={"/login"}
          className="rounded-3xl border-2 border-transparent px-6 py-2 text-blue-500 duration-300 ease-in-out  hover:border-[#f3f5f9] hover:bg-[#f3f5f9]"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
