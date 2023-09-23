import React, { useEffect, useRef } from "react";
import observeIntersection from "../utils/intersectionObserver";
const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    observeIntersection({
      sectionRef: aboutRef,
      classNames: ["animate-slide-in-up", "animate-slide-in-down"],
      threshHold: 0.3,
    });
  }, []);
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full"
        ref={aboutRef}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center py-10">
            <p className="text-xl">
              As a skilled front-end developer with expertise in AWS, React.js,
              HTML, CSS, and JavaScript, I bring a strong foundation in web
              development. My passion for problem-solving and interest in DevOps
              indicate a holistic approach to software development, emphasizing
              collaboration, automation, and efficiency in delivering
              high-quality applications.
            </p>
            <br />
            <p className="text-xl">
              In the future, I aspire to delve into the field of Artificial
              Intelligence. My goal is to blend my existing front-end
              development and DevOps skills with AI expertise, harnessing AI's
              potential to create intelligent, data-driven applications. This
              fusion promises exciting opportunities for innovation and
              problem-solving in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
