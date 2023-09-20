import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
// import LinkedIn from "../Assets/LinkedIn.svg";
// import instagram from "../Assets/instagram.svg";
import hero from "../Assets/boy.png";
import SocialLink from "../Components/Navbar/SocialLink";
import observeIntersection from "../utils/intersectionObserver";

const Home = () => {
  const homeRef = useRef(null);
  useEffect(() => {
    observeIntersection({
      sectionRef: homeRef,
      classNames: ["animate-slide-in-left", "animate-slide-in-right"],
      threshHold: 0.3,
    });
  }, []);
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div
          className="flex flex-col items-center  justify-center h-screen w-full px-4  md:flex-row"
          ref={homeRef}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              I'm a web developer
            </h2>
            <p className="text-gray-500 py-3 max-w-md">
              I have 1 year of experience as web developer. <br />I love to work
              on technologies like React, Tailwind, Node.js, AWS Cloud.
            </p>
            <div className="">
              <button className="group  text-white flex w-fit items-center gap-2 px-3 py-3 rounded-md bg-gradient-to-r from-orange-200 to-yellow-800">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="my-3">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <SocialLink />
    </div>
  );
};

export default Home;
