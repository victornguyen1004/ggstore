import images from "../../assets/img";
import Navbar from "../../components/Navbar";
import AboutContent from "./Content";

function About() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar variant={"about"} />
      <div className="relative ">
        <div
          className="h-screen w-full bg-fixed md:min-h-screen"
          style={{
            backgroundImage: `url(${images.about})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded text-4xl font-bold shadow-2xl backdrop-blur-sm">
            <img src={images.aboutTitle} alt="" className="w-2/3 md:w-1/2" />
          </div>
        </div>
      </div>
      <div className="">
        <AboutContent />
      </div>
    </div>
  );
}

export default About;
