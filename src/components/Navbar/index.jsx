import { Link } from "react-router-dom";
import images from "../../assets/img";
import { useState, useEffect } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const HandleMenuOnclick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const RenderMenu = () => {
    if (menu) {
      return (
        <div className="absolute right-0 top-full flex w-screen flex-col border bg-[#fafafa] shadow">
          <Link
            to={"/"}
            className="w-full border border-zinc-100 py-4 text-center"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="w-full border border-zinc-100 py-4 text-center"
          >
            About us
          </Link>
          <Link
            to={"/product"}
            className="w-full border border-zinc-100 py-4 text-center"
          >
            Product
          </Link>
          <Link
            to={"/contact"}
            className="w-full border border-zinc-100 py-4 text-center"
          >
            Contact
          </Link>
        </div>
      );
    }
  }

  useEffect(() => {}, [menu]);

  return (
    <div className="sticky top-0 z-50 flex h-[80px] items-center justify-between border-b bg-[#fafafa] px-4 text-black shadow md:border-b-0 md:px-12 md:shadow-none  lg:px-28">
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

      <div className="flex h-full items-center lg:hidden">
        <button className="" onClick={() => HandleMenuOnclick()}>
          <i class="fa-solid fa-bars p-4 text-xl"></i>
        </button>
        {RenderMenu()}
      </div>
    </div>
  );
}

export default Navbar;
