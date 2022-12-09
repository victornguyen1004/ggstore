import DefaultWrapper from "../Wrappers/Default";
import BackButtonBar from "../BackButton/BackButtonBar";
import images from "../../assets/img";

function Developing() {
    return (
      <>
        <DefaultWrapper>
          <BackButtonBar />
          <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center">
            <div className="text-lg font-medium text-zinc-800">
              New Features Coming Soon!
            </div>
            <div className="mt-4">
              <img
                src={images.building}
                alt=""
                className="w-[320px] object-contain"
              />
            </div>
          </div>
        </DefaultWrapper>
      </>
    );
}

export default Developing;