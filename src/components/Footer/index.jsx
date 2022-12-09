import images from "../../assets/img";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className="flex justify-between bg-zinc-900 px-12 text-xs text-[#f4f6f5] shadow-[0_-16px_16px_-16px_rgba(0,0,0,0.3)] lg:px-28 lg:py-12">
        <div className="flex flex-col justify-between">
          <Link to={"/"} className="">
            <img src={images.logoFullwhite} alt="" className="w-36" />
          </Link>
          <div className="">
            <Link to={""} className="pr-4">
              Privacy Policy
            </Link>
            <Link to={""}>Terms & Conditions</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-x-8 gap-y-4 font-medium">
          <Link to={""} className="">
            Rentals
          </Link>
          <Link to={""} className="">
            Support
          </Link>
          <Link to={""} className="">
            Remote/Virtual Assist
          </Link>
          <Link to={""} className="">
            Contact Team
          </Link>
          <Link to={""} className="">
            List your gear
          </Link>
          <Link to={""} className="">
            Careers
          </Link>
          <Link to={""} className="">
            How it works
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <Link to={""} className="p-2">
              <i class="fa-brands fa-square-facebook"></i>
            </Link>
            <Link to={""} className="mx-2 p-2">
              <i class="fa-brands fa-square-twitter"></i>
            </Link>
            <Link to={""} className="p-2">
              <i class="fa-brands fa-square-instagram"></i>
            </Link>
          </div>
          <span className="text-right">
            <i className="fa-regular fa-copyright pr-1"></i>
            <span className="font-semibold">GGStore 2022</span>
          </span>
        </div>
      </div>
    );
}

export default Footer;