import images from "../../assets/img";
import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";

function About() {
  return (
    <div className="relative ">
      <Navbar variant={"about"} />
      <div
        className="absolute top-0 left-0 min-h-screen w-full bg-fixed"
        style={{
          backgroundImage: `url(${images.about})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded text-4xl font-bold shadow-2xl backdrop-blur-sm">
          <img src={images.aboutTitle} alt="" className="w-2/3 md:w-1/2" />
        </div>
      </div>
      <div className="mt-[calc(100vh-80px)] h-[1600px] py-12 bg-[#1f1f1f]">
        <DefaultWrapper>
          <div className=" text-2xl text-white">Bla bla</div>
        </DefaultWrapper>
      </div>
    </div>
  );
}

export default About;
