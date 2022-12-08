import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";
import images from "../../assets/img";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import CustomerItem from "../../components/CustomerItem";

function Home() {
  return (
    <div className="">
      <Navbar />
      <DefaultWrapper>
        {/* Banner */}
        <div
          className="grid grid-cols-12 lg:gap-12"
          style={{
            backgroundImage: `url(${images.dottedBg})`,
            backgroundSize: "contain",
          }}
        >
          <div className="col-span-12 md:col-span-8">
            <img src={images.banner} alt="" className="object-cover" />
          </div>
          <div className="col-span-12 flex h-full flex-col justify-center md:col-span-4">
            <p className="w-content mb-3 rounded-xl bg-white text-4xl font-bold">
              ENTER THE
            </p>
            <p className="mb-4 rounded-xl bg-white text-4xl font-bold">
              GAMING VERSE
            </p>
            <h3 className="mb-4 rounded-xl bg-white text-lg font-medium text-zinc-500">
              We all play. In our way. For our own reasons. And that’s what
              makes this community we’ve built together so amazing.
            </h3>
            <Link
              to={"/product"}
              className="flex w-full justify-center rounded-3xl border-2 border-blue-500 bg-blue-500 py-2 px-4 font-bold text-white shadow-md duration-300 ease-in-out hover:bg-white hover:text-blue-500 md:w-auto md:self-start"
            >
              BROWSE PRODUCT
            </Link>
          </div>
        </div>
        {/* Top Product */}
        <div className="mt-12">
          <div className="text-center text-2xl font-bold">Top Product</div>
          <div className="mx-auto mt-4 w-[720px] text-center font-medium text-zinc-400">
            Whether you're recording a podcast, starting your DIY project, or
            doing a shoot, start with us. We do research for you so you can
            spend less time searching, and more time doing.
          </div>
          <div className="my-12 flex justify-evenly px-32 text-center text-sm font-semibold text-zinc-400">
            <button className="text-black">ALL</button>
            <button className="hover:text-black">MOUSE</button>
            <button className="hover:text-black">KEYBOARD</button>
            <button className="hover:text-black">HEADPHONE</button>
            <button className="hover:text-black">SPEAKER</button>
            <button className="hover:text-black">MICROPHONE</button>
            <button className="hover:text-black">WEBCAM</button>
          </div>
          <div className="mb-12 grid grid-cols-12 grid-rows-2 gap-8">
            <ProductItem
              image={images.mouse1}
              name={"Logitech G102"}
              price={"59.99"}
              rating={"5"}
            />
            <ProductItem
              image={images.hyperxcloud}
              name={"Hyper X Cloud"}
              price={"129.99"}
              rating={"4.7"}
            />
            <ProductItem
              image={images.corsairk70}
              name={"Corsair K70"}
              price={"169.99"}
              rating={"4.5"}
            />
            <ProductItem
              image={images.microphone}
              name={"GTech M730"}
              price={"99.99"}
              rating={"4.5"}
            />
            <ProductItem
              image={images.mouse2}
              name={"Logitech G730"}
              price={"129.99"}
              rating={"5"}
            />
            <ProductItem
              image={images.webcam}
              name={"Logitech C920"}
              price={"299.99"}
              rating={"5"}
            />
            <ProductItem
              image={images.rogstrig}
              name={"ROG Strix Scope"}
              price={"59.99"}
              rating={"5"}
            />
            <ProductItem
              image={images.g733}
              name={"Logitech G733"}
              price={"169.99"}
              rating={"4.9"}
            />
          </div>
        </div>
        <div className="mb-16 flex w-full justify-center">
          <Link
            to={"/product"}
            className="rounded-3xl border-2 border-blue-500 bg-blue-500 px-8 py-2 text-sm font-medium text-white shadow-md duration-300 ease-in-out hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Browse All Items
          </Link>
        </div>
        {/* Trusted customers */}
        <div className="mb-8 text-center text-2xl font-bold">
          Trusted Customers
        </div>
        <div className="mb-12 grid grid-cols-12 grid-rows-2 gap-x-12">
          <CustomerItem image={images.corsair} />
          <CustomerItem image={images.logitech} />
          <CustomerItem image={images.steelseries} />
          <CustomerItem image={images.razer} />
          <CustomerItem image={images.hyperx} />
          <CustomerItem image={images.asus} />
          <CustomerItem image={images.rog} />
          <CustomerItem image={images.alienware} />
        </div>
      </DefaultWrapper>
      <div className="flex justify-between bg-zinc-900 px-12 text-xs text-[#f4f6f5] lg:px-28 lg:py-12">
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
    </div>
  );
}

export default Home;
