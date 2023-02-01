import images from "../../../assets/img";

function AboutContent() {
  return (
    <div className="grid w-full grid-cols-12 gap-x-0 md:gap-x-12 gap-y-16 md:gap-y-28 border-t border-[#0c0c0c] bg-[#1f1f1f] px-4 pt-48 pb-28 text-white md:px-24">
      <div className="col-span-12 md:col-span-6">
        <div className="pb-4 md:text-right text-2xl font-bold">
          The Founder Of GGStore
        </div>
        <div className="text-justify indent-8 text-lg tracking-tighter">
          I am Nguyen Quang Vu aka Victor Nguyen, the founder of this website.
          You might have known me as Victor Web Developing. My main goal is to
          become a full-stack web developer. At the moment you reading this, the
          team is just me but it will expand in future project.
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="pb-4 md:text-right text-2xl font-bold">
          The Creation Of GGStore
        </div>
        <div className="text-justify indent-8 text-lg tracking-tighter">
          This project was built from scratch in my junior year of university.
          At the beginning it just a Figma prototype for my Designing class. I
          found the project to be interesting so I built the whole app later on,
          including the Front-End, Back-End, API,...
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-x-0 md:gap-x-12 gap-y-12">
        <div className="col-span-12 text-center text-2xl font-bold">
          For more info, hit me on
        </div>
        <a
          href="tel:0528695414"
          className="group col-span-12 md:col-span-4 pb-4 text-center font-medium"
        >
          <span className="relative h-14 w-9">
            <i class="fa-solid fa-phone pb-4 text-4xl opacity-100 duration-200 ease-in-out group-hover:text-sky-500 group-hover:opacity-0"></i>
            <i class="fa-solid fa-phone-volume absolute bottom-0 left-0 text-4xl text-sky-500 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></i>
          </span>
          <p className="duration-200 ease-in-out group-hover:text-sky-500">
            (+84)528695414
          </p>
        </a>
        <a
          href="mailto:quanggvuu1004@gmail.com"
          className="group col-span-12 md:col-span-4 pb-4 text-center font-medium"
        >
          <span className="relative h-14 w-9">
            <i class="fa-solid fa-envelope pb-4 text-4xl opacity-100 duration-200 ease-in-out group-hover:text-sky-500 group-hover:opacity-0"></i>
            <i class="fa-solid fa-envelope-open absolute bottom-0 left-0 text-4xl text-sky-500 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></i>
          </span>
          <p className="duration-200 ease-in-out group-hover:text-sky-500">
            quanggvuu1004@gmail.com
          </p>
        </a>
        <a
          href={"/contact"}
          className="group col-span-12 md:col-span-4 pb-4 text-center font-medium"
        >
          <span className="relative h-14 w-9">
            <i class="fa-regular fa-square pb-4 text-4xl opacity-100 duration-200 ease-in-out group-hover:text-sky-500 group-hover:opacity-0"></i>
            <i class="fa-solid fa-up-right-from-square absolute bottom-0 left-0 text-4xl text-sky-500 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></i>
          </span>
          <p className="duration-200 ease-in-out group-hover:text-sky-500">
            Head to Contact Page
          </p>
        </a>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-x-0 md:gap-x-12 gap-y-12">
        <div className="col-span-12 pb-4 text-center text-2xl font-bold">
          This Website Is Made Of
        </div>

        {/* ReactJS row */}
        <div className="col-span-3 flex items-center justify-center">
          <img
            src={images.reactjs}
            alt="reactjs"
            className="w-48 rounded-full text-center outline outline-1 outline-zinc-600"
          />
        </div>
        <div className="col-span-6">
          <div className="mb-2 text-xl font-semibold text-[#00D8FF]">
            ReactJS
          </div>
          <div className="text-justify align-middle tracking-tighter">
            A framework based on Javascript Language to create the face of a
            website. The backbones of this website. Provide tools to create the
            best UI/UX. Gift from heaven for these modern websites. Cannot be as
            smooth as butter without ReactJS.
          </div>
        </div>

        {/* TailwindCSS row */}
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-6">
          <div className="mb-2 text-right text-xl font-semibold text-[#3FAEB0]">
            TailwindCSS
          </div>
          <div className="text-justify align-middle tracking-tight">
            Seeing more CSS files getting added to the project tree overtime can
            be irritating. Using TailwindCSS not only make my project tree
            cleaner, but also speed up my writing speed. I've been able to
            create variaties of pages in a surprisingly short time thanks to
            TailwindCSS.
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <img
            src={images.tailwindcss}
            alt="tailwindcss"
            className="w-48 rounded-full text-center outline outline-1 outline-zinc-600"
          />
        </div>

        {/* ExpressJS row */}
        <div className="col-span-3 flex items-center justify-center">
          <img
            src={images.nodejs}
            alt="nodejs"
            className="w-48 rounded-full text-center outline outline-1 outline-zinc-600"
          />
        </div>
        <div className="col-span-6">
          <div className="mb-2 text-xl font-semibold text-[#66B748]">
            NodeJS & ExpressJS
          </div>
          <div className="text-justify align-middle tracking-tighter">
            To create the first API I've ever created. At the beginning my aim
            was to become a Front-end Developer. But later on I got to learned
            all the Database and Backend by myself since nobody provides me a
            backend. Then I encountered the urge to become a full-stack web
            developer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
