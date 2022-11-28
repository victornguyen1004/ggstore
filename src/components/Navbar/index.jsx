import images from "../../assets/img";
import { publicRoutes } from "../../routes";
import NavbarItem from "./Item";

function Navbar() {
  return (
    <div className="h-[80px] px-28 py-4 flex items-center justify-between text-black">
      <a className="w-28" href="https://fb.com/nqv.ilb">
        <img src={images.logoFull} alt="logo.png" className="" />
      </a>

      
      <div className="flex items-center">
        {publicRoutes.map((route, index) => {
          return <NavbarItem key={index} path={route.path} name={route.name} />;
        })}
      </div>


      <div className="text-mg font-medium">
        <button className="py-2 px-6 border-2 border-blue-500 rounded-2xl text-white bg-blue-500 hover:bg-white hover:text-blue-500 delay ease-in-out duration-300">Đăng ký</button>
        <button className="px-4 py-2 text-blue-600 ">Đăng nhập</button>
      </div>
    </div>
  );
}

export default Navbar;
