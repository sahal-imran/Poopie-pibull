import React from "react";
import { Fade } from "react-reveal";
function Specs() {
  return (
    <div className=" flex flex-col bg-black-default px-4 sm:px-20 pb-20 pt-8 -mt-1">
      <div className="">
        <Fade bottom>
          <h1 className="font-secondary head head-specs mb-24 relative pb-4 text-white-light text-5xl font-semibold md:font-extrabold">
            Poopie Pitbull Specs
          </h1>
        </Fade>
        <Fade bottom>
        <div className="grid md:grid-cols-2 md:grid-rows-5 md:w-3/5 md:m-auto md:mt-40 mt-10 gap-y-12 md:gap-4 md:gap-x-20">
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Backgrounds{" "}
            </h2>
            <span className="font-secondary text-5xl sm:text-8xl grad-1 font-bold">5</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Head wear{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-3 font-secondary font-bold">8</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Skins{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-3 font-secondary font-bold">5</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Eyes{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-1 font-secondary font-bold">5</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Dress{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-2 font-secondary font-bold">17</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              For mouth{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-2 font-secondary font-bold">13</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Ear rings{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-4 font-secondary font-bold">12</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              For neck{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-4 font-secondary font-bold">18</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Eye wear{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-3 font-secondary font-bold">14</span>
          </div>
          <div className="flex justify-between md:justify-start items-center p-4">
            <h2 className="text-white-light font-secondary font-semibold text-lg sm:text-2xl mr-20">
              Mustache{" "}
            </h2>
            <span className="text-5xl sm:text-8xl grad-3 font-secondary font-bold">4</span>
          </div>
        </div>
        <div className="md:w-3/5 m-auto flex justify-center mb-12 items-center" >
            <h1 className="font-secondary grad-4 text-6xl font-bold mt-12 " >101 traits</h1>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Specs;
