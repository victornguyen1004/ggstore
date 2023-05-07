import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/img";
import { useState, useEffect } from "react";

function Navbar(props) {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    ScrollHandle();
  }, [menu]);

  function logout() {
    localStorage.removeItem("token"); // Remove token from local storage
    localStorage.removeItem("username"); // Remove username from local storage
    navigate("/");
    // Additional steps to clear user data or redirect user to a different page can be added here
  }

  const HandleMenuOnclick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const ScrollHandle = () => {
    const navbar = document.getElementById("mynav");
    if (navbar) {
      window.onscroll = () => {
        if (window.scrollY > window.innerHeight) {
          navbar.classList.add("bg-[#1f1f1f]");
        } else {
          navbar.classList.remove("bg-[#1f1f1f]");
        }

        if (window.scrollY > window.innerHeight - 80) {
          navbar.classList.add("shadow-md");
          navbar.classList.add("border-b");
          navbar.classList.add("border-[#0c0c0c]");
        } else {
          navbar.classList.remove("shadow-md");
          navbar.classList.remove("border-b");
          navbar.classList.remove("border-[#0c0c0c]");
        }
      };
    }
  };

  const RenderNavbar = () => {
    if (props.variant === "about") {
      return (
        <div
          id="mynav"
          className="fixed right-0 left-0 top-0 z-50 flex h-[80px] items-center justify-between  px-4 text-black md:px-12  lg:px-28"
        >
          <Link className="w-28" to={"/"}>
            <img src={images.logoFullwhite} alt="logo.png" className="" />
          </Link>
          <div className="hidden items-center font-semibold text-white lg:flex">
            <Link to={"/"} className="mr-2 px-4 py-3">
              Home
            </Link>
            <Link to={"/about"} className="mr-2 px-4 py-3">
              About
            </Link>
            <Link to={"/product"} className="mr-2 px-4 py-3">
              Product
            </Link>
            <Link to={"/contact"} className="px-4 py-3">
              Contact
            </Link>
          </div>
          <div className="text-md hidden lg:block text-white">
            {localStorage.getItem("token") ? (
              <div className="text-sm">
                Logged in as{" "}
                <Link href="/" className="font-medium">
                  {localStorage.getItem("username")}
                </Link>
                ,
                <button
                  onClick={logout}
                  className="p-2 font-semibold text-red-600"
                >
                  Logout?
                </button>
              </div>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="mr-4 rounded-3xl border-2 border-blue-500 bg-inherit py-2 px-6 font-bold text-blue-500 shadow-sm duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                >
                  Sign up
                </Link>
                <Link
                  to={"/login"}
                  className="rounded-3xl border-2 border-transparent px-6 py-2 font-bold text-blue-500 duration-300 ease-in-out  hover:border-[#f3f5f9] hover:bg-[#f3f5f9]"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="flex h-full items-center lg:hidden">
            <button className="" onClick={() => HandleMenuOnclick()}>
              <i className="fa-solid fa-bars p-4 text-xl text-white"></i>
            </button>
            {RenderMenu()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="sticky top-0 left-0 right-0 z-50 flex h-[80px] items-center justify-between border-b bg-[#fafafa] px-4 text-black shadow md:border-b-0 md:px-12 md:shadow-none  lg:px-28">
          <Link className="w-28" to={"/"}>
            <img src={images.logoFull} alt="logo.png" className="" />
          </Link>

          <div className="hidden items-center font-semibold lg:flex">
            <Link to={"/"} className="mr-2 px-4 py-3">
              Home
            </Link>
            <Link to={"/about"} className="mr-2 px-4 py-3">
              About
            </Link>
            <Link to={"/product"} className="mr-2 px-4 py-3">
              Product
            </Link>
            <Link to={"/contact"} className="px-4 py-3">
              Contact
            </Link>
          </div>
          <div className="text-md hidden lg:block">
            {localStorage.getItem("token") ? (
              <div className="text-sm">
                Logged in as {" "}
                <Link href="/" className="font-medium">
                  {localStorage.getItem("username")}
                </Link>
                , 
                <button
                  onClick={logout}
                  className="p-2 font-semibold text-red-600"
                >
                  Logout?
                </button>
              </div>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="mr-4 rounded-3xl border-2 border-blue-500 bg-inherit py-2 px-6 font-bold text-blue-500 shadow-sm duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                >
                  Sign up
                </Link>
                <Link
                  to={"/login"}
                  className="rounded-3xl border-2 border-transparent px-6 py-2 font-bold text-blue-500 duration-300 ease-in-out  hover:border-[#f3f5f9] hover:bg-[#f3f5f9]"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="flex h-full items-center lg:hidden">
            <button className="" onClick={() => HandleMenuOnclick()}>
              <i className="fa-solid fa-bars p-4 text-xl"></i>
            </button>
            {RenderMenu()}
          </div>
        </div>
      );
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
            About
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
          {localStorage.getItem("token") ? (
            <>
              <button
                onClick={logout}
                className="w-full border border-zinc-100 py-4 text-center font-semibold text-red-500"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/signup"}
                className="w-full border border-zinc-100 py-4 text-center underline "
              >
                Sign up
              </Link>
              <Link
                to={"/login"}
                className="w-full border border-zinc-100 py-4 text-center underline "
              >
                Login
              </Link>
            </>
          )}
        </div>
      );
    }
  };

  return RenderNavbar();
}

export default Navbar;
