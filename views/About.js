import React from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
function About() {
  return (
    <div className=" flex flex-col bg-black-default px-4 sm:px-20 pb-40 pt-8 -mt-1">
      <Fade bottom>
        <h1 className="font-secondary head relative pb-4 text-white-light text-5xl font-semibold md:font-extrabold mb-20">
          About
        </h1>
      </Fade>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-12">
        <Fade left>
          <p className="md:w-2/5 text-xl text-white-light leading-10">
            We rescued Cali from an animal rescue center in Los Angeles three
            years ago. She has been the sweetest, most loving dog we have ever
            been with and to give back, we will be donating to animal shelters
            across the United States for each milestone we reach.
            <br />
            <br />
            Each Poopie Pitbull that is minted will help support animals in need
            waiting to be rehomed.
          </p>
        </Fade>
        <Fade bottom>
          <div className="relative md:order-none order-first md:mb-0 mb-12 md:w-2/5">
            <Image
              src="/images/about.png"
              alt=""
              width={500}
              height={500}
              className="absolute"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
