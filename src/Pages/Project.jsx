import React, { useRef, useEffect } from "react";
import weatherApp from "../Assets/Weather_app.png";
import TwitterClone from "../Assets/titter_clone.jpg";
import Todo from "../Assets/todo_list.png";
import Emojipedia from "../Assets/Emojipedia.png";
import ExpenseTracker from "../Assets/ExpenseTracker.png";
import observeIntersection from "../utils/intersectionObserver";

const Project = () => {
  const list = [
    {
      id: 1,
      src: weatherApp,
    },
    {
      id: 2,
      src: ExpenseTracker,
    },
    {
      id: 3,
      src: Todo,
    },
    {
      id: 4,
      src: TwitterClone,
    },
    {
      id: 5,
      src: Emojipedia,
    },
    {
      id: 6,
      src: weatherApp,
    },
  ];
  const projectRef = useRef(null);
  useEffect(() => {
    observeIntersection({
      sectionRef: projectRef,
      classNames: ["animate-slide-in-up", "animate-slide-in-down"],
      threshHold: 0.3,
    });
  }, []);
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        ref={projectRef}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {list.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className=" mx-auto w-[200px] h-[200px] 
            rounded-lg duration-300 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
