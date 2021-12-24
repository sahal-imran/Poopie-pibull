import React from "react";
import { Fade } from "react-reveal";
function RoadMap() {
  return (
    <>
      <div className=" flex flex-col bg-black-default px-4 sm:px-20 pb-20 pt-8 -mt-1 ">
        <Fade bottom>
          <h1 className="font-secondary head relative mb-24 text-white-light text-5xl pb-4 font-semibold md:font-extrabold pt-4">
            RoadMap
          </h1>
        </Fade>
        <div className="grid grid-rows-10 grid-cols-1 md:grid-rows-5 md:grid-cols-2 gap-x-12 gap-y-24 w-3/4 m-auto md:mt-12">
        <Fade left>
          <div className="flex order-2 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <h1 className="text-white-light text-8xl grad-3 font-mono font-bold">
              10%
            </h1>
            <ul className="list-disc text-white-light text-lg leading-10 mt-10">
              <li>
                Re-investing funds into marketing to create awareness for public
                mint.
              </li>
              <li>Donate $10,000 to pitbull shelter in California.</li>
              <li>5 iPhone 13 Pro giveaway to random Poopie Pitbull holders</li>
            </ul>
          </div>
          </Fade>
          <Fade right>
          <div className="flex order-1 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <img src="./Roadmap/Roadmap-1.png" alt="" />
          </div>
          </Fade>
          <Fade left>
          <div className="flex order-3 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <img src="./Roadmap/Roadmap-2.png" alt="" />
          </div>
          </Fade>
          <Fade right>
          <div className="flex order-4 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <h1 className="text-white-light text-8xl grad-3 font-mono font-bold">
              25%
            </h1>
            <ul className="list-disc text-white-light text-lg leading-10 mt-10">
              <li>
                Donate $20,000 to 2 different pitbull shelters in California.
                $10,000 each.
              </li>
              <li>
                10 iPhone 13 Pro giveaway to random Poopie Pitbull holders.
              </li>
              <li>
                2 Macbook Pro 16 inch giveaway to random Poopie Pitbull Holders.
              </li>
            </ul>
          </div>
          </Fade>
          <Fade left>
          <div className="flex order-6 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <h1 className="text-white-light text-8xl grad-3 font-mono font-bold">
              50%
            </h1>
            <ul className="list-disc text-white-light text-lg leading-10 mt-10">
              <li>
              Donate $50,000 to 5 different pitbull shelters in the United States. $10,000 each
              </li>
              <li>
              20 iPhone 13 Pro giveaway to random Poopie Pitbull holders
              </li>
              <li>
              5 Macbook Pro 16 inch giveaway to random Poopie Pitbull Holders.
              </li>
            </ul>
          </div>
          </Fade>
          <Fade right>
          <div className="flex order-5 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <img src="./Roadmap/Roadmap-3.png" alt="" />
          </div>
          </Fade>
          <Fade left>
          <div className="flex order-7 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <img src="./Roadmap/Roadmap-4.png" alt="" />
          </div>
          </Fade>
          <Fade right>
          <div className="flex order-8 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <h1 className="text-white-light text-8xl grad-3 font-mono font-bold">
              75%
            </h1>
            <ul className="list-disc text-white-light text-lg leading-10 mt-10">
              <li>
              Donate $50,000 to 5 different pitbull shelters in the United States. $10,000 each
              </li>
              <li>
              10 iPhone 13 Pro giveaway to random Poopie Pitbull holders
              </li>
              <li>
              3 Macbook Pro 16 inch giveaway to random Poopie Pitbull Holders.
              </li>
              <li>5 ETH giveaway distributed to 5 randomly selected Poopie Pitbull holders.</li>
            </ul>
          </div>
          </Fade>
          <Fade left>
          <div className="font-secondary flex order-10 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <h1 className="text-white-light text-8xl grad-3 font-mono font-bold">
              100%
            </h1>
            <ul className="list-disc text-white-light text-lg leading-10 mt-10">
              <li>
              Donate 1 year supply of needs to 2 animal shelters in the United States.
              </li>
              <li>
              10 ETH giveaway to 10 randomly selected Poopie Pitbull holders.
              </li>
            </ul>
          </div>
          </Fade>
          <Fade right>
          <div className="flex order-9 md:order-none flex-col justify-start items-start md:justify-center md:items-center ">
            <img src="./Roadmap/Roadmap-5.png" alt="" />
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
export default RoadMap;
