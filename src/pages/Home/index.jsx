import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";
import images from "../../assets/img";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <Navbar />
      <DefaultWrapper>
        <div className="h-[calc(100vh-80px)] flex items-center">
          <div className="h-full">
            <img src={images.banner} alt="banner.png" className="h-full object-cover" />
          </div>
          <div className="flex-1 ml-12 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              ENTER THE GAMING VERSE
            </h2>
            <h3 className="text-xl mb-4">
              We all play. In our way. For our own reasons. And that’s what
              makes this community we’ve built together so amazing. More than
              levels in games, there’s levels to all of us. And where we go
              next, is up to us.
            </h3>
            <Link to={"/product"} className="bg-blue-500 text-white font-bold py-2 rounded-3xl border-2 border-blue-500 hover:text-blue-500 hover:bg-white ease-in-out duration-300 flex justify-center">BROWSE PRODUCT</Link>
          </div>
        </div>
      </DefaultWrapper>
    </div>
  );
}

export default Home;
