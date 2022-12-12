import { Link } from "react-router-dom";
import images from "../../assets/img";

function Navbar() {
  return (
    <div className="flex h-[80px] sticky top-0 z-50 bg-[#fafafa] border-b md:border-b-0 shadow md:shadow-none items-center justify-between px-4 text-black md:px-12  lg:px-28">
      <Link className="w-28" to={"/"}>
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
      <div className="text-mg hidden font-bold lg:block">
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

      <div className="relative h-full flex items-center md:hidden">
        <button className="">
          <i class="fa-solid fa-bars p-4 text-xl"></i>
        </button>
        <div className="absolute right-0 bottom-0 translate-y-full">
          <div className="flex flex-col w-screen px-12 py-4 bg-[#fafafa]">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/about"} className="">
              About us
            </Link>
            <Link to={"/product"} className="">
              Product
            </Link>
            <Link to={"/contact"} className="">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
