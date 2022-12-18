import images from "../../assets/img";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex p-8 flex-col bg-zinc-900 text-xs text-[#f4f6f5] shadow-[0_-16px_16px_-16px_rgba(0,0,0,0.3)] md:px-28 md:py-8">
      <div className="mb-8 flex flex-col items-center md:items-start justify-between md:flex-row">
        <Link to={"/"} className="mb-8 hidden md:block">
          <img src={images.logoFullwhite} alt="" className="w-36" />
        </Link>
        <div className="mb-8 grid text-center md:text-left grid-cols-2 grid-rows-4 gap-4 font-medium md:mb-0">
          <Link to={""} className="p-2 ">
            Rentals
          </Link>
          <Link to={""} className="p-2 ">
            Support
          </Link>
          <Link to={""} className="p-2 ">
            Remote/Virtual Assist
          </Link>
          <Link to={""} className="p-2 ">
            Contact Team
          </Link>
          <Link to={""} className="p-2 ">
            List your gear
          </Link>
          <Link to={""} className="p-2 ">
            Careers
          </Link>
          <Link to={""} className="p-2 ">
            How it works
          </Link>
        </div>
        <div className="flex justify-evenly">
          
            <Link to={""} className="px-4 py-2">
              <i className="fa-brands fa-square-facebook text-xl md:text-sm"></i>
            </Link>
            <Link to={""} className="px-4 py-2">
              <i className="fa-brands fa-square-twitter text-xl md:text-sm"></i>
            </Link>
            <Link to={""} className="px-4 py-2">
              <i className="fa-brands fa-square-instagram text-xl md:text-sm"></i>
            </Link>
          
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-right">
          <i className="fa-regular fa-copyright pr-1"></i>
          <span className="font-semibold">GGStore 2022</span>
        </span>
        <div className="">
          <Link to={""} className="pr-4">
            Privacy Policy
          </Link>
          <Link to={""}>Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
