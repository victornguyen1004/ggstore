import { Link } from "react-router-dom";
import images from "../../assets/img";
import { publicRoutes } from "../../routes";
import NavbarItem from "./Item";

function Navbar() {
  return (
    <div className="flex h-[80px] items-center justify-between px-28 py-4 text-black">
      <Link className="w-28" to={"https://fb.com/nqv.ilb"}>
        <img src={images.logoFull} alt="logo.png" className="" />
      </Link>

      <div className="flex items-center">
        {publicRoutes.map((route, index) => {
          return <NavbarItem key={index} path={route.path} name={route.name} />;
        })}
      </div>

      <div className="text-mg font-bold">
        <button className="mr-4 rounded-3xl border-2 border-blue-500 bg-blue-500 py-2 px-6 text-white shadow duration-300 ease-in-out hover:bg-white hover:text-blue-500">
          Đăng ký
        </button>
        <button className="rounded-3xl border-2 border-white px-4 py-2 text-blue-500 duration-300 ease-in-out  hover:border-[#f3f5f9] hover:bg-[#f3f5f9]">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Navbar;
