import React from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
function Teams() {
  return (
    <div className=" flex flex-col bg-black-default px-4 sm:px-20 pb-20 pt-8 -mt-1">
      <Fade bottom>
        <h1 className="font-secondary head relative mb-24 text-white-light text-5xl pb-4 font-semibold md:font-extrabold pt-4">
          Team
        </h1>
      </Fade>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-4 justify-center items-center text-center pt-16">
        <Fade bottom>
          <div className="md:col-span-3 justify-self-center">
            <Image
              src="/images/6.png"
              alt=""
              width={500}
              height={500}
              className="rounded-full img-1"
            />
            <h1 className="font-secondary mt-3.5 grad-1 text-white-light text-3xl pb-2 font-semibold pt-4">
              David
            </h1>
            <p className="text-white-light text-base">
              Project Manager / Marketing
            </p>
          </div>
        </Fade>
        <Fade right>
          <div>
            <Image
              src="/images/3.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-2"
            />
            <h1 className="font-secondary mt-3.5 grad-2 text-white-light text-3xl pb-2 font-semibold pt-4">
              Gangadara
            </h1>
            <p className="text-white-light text-base">Graphics Designer</p>
          </div>
        </Fade>
        <Fade bottom>
          <div>
            <Image
              src="/images/2.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-3"
            />
            <h1 className="font-secondary mt-3.5 grad-3 text-white-light text-3xl pb-2 font-semibold pt-4">
              Afzaal Afzal
            </h1>
            <p className="text-white-light text-base">FrontEnd Developer</p>
          </div>
        </Fade>
        <Fade left>
          <div>
            <Image
              src="/images/7.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-4"
            />
            <h1 className="font-secondary mt-3.5 grad-4 text-white-light text-3xl pb-2 font-semibold pt-4">
              Sahal Imran
            </h1>
            <p className="text-white-light text-base">FrontEnd Developer</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Teams;