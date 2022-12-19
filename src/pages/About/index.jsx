import images from "../../assets/img";
import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";

function About() {
  return (
    <div className="relative bg-[#1f1f1f] min-h-screen">
      <Navbar variant={"about"} />
      <div
        className="absolute top-0 left-0 h-[360px] w-full bg-fixed md:min-h-screen"
        style={{
          backgroundImage: `url(${images.about})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded text-4xl font-bold shadow-2xl backdrop-blur-sm">
          <img src={images.aboutTitle} alt="" className="w-2/3 md:w-1/2" />
        </div>
      </div>
      <div className="mt-[260px] py-12 text-white md:mt-[calc(100vh-80px)]">
        <DefaultWrapper>
          <div className="flex">Coming soon...</div>
        </DefaultWrapper>
      </div>
    </div>
  );
}

export default About;
