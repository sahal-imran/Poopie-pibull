import React, { useState } from "react";

import Carusel from "../components/Carusel";
import Timer from "../components/Timer";
function Header() {
  const time = new Date("November 30, 2021 06:00");
  // time.setSeconds(time.getSeconds() + 1055000);

  const [qunaity, setQuanityt] = useState(1);

  return (
    <div className="bg-black-default px-4 sm:px-20 py-10 -mt-1 ">
      <div className="max-w-7xl m-auto  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="md:col-span-2 md:max-w-3xl">
            <h1 className="grad font-secondary text-5xl md:text-6xl pb-2 font-semibold md:font-extrabold pt-4">
              Mint Your Poopie Pitbull Now to Participate In Prize Raffles And
              Cash Giveaways.
              <span className="text-white-light text-base md:text-2xl pb-2 font-semibold md:font-extrabold">
                (Prize pool is $500,000)
              </span>
            </h1>
            <p className="font-secondary font-normal md:font-semibold text-base text-grey-default my-7 md:max-w-xl">
              Poopie Pitbull is a collection of 9,999 of unique Nft’s on the ETH
              BlockChain
            </p>
            <div>
              <Timer expiryTimestamp={time} />
            </div>
          </div>
          <div>
            <Carusel />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:m-0 mt-12">
        <div className="md:w-6/12 sm:w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center border-4 rounded border-gradTo p-5  md:px-24 mt-8">
            <h1 className="grad text-5xl md:text-6xl pb-2 font-semibold mb-12">
              Main Drop
            </h1>
            <div className="flex justify-center">
              <div className="flex justify-center md:justify-between md:mr-10">
                <button onClick={()=>setQuanityt(qunaity-1)} className="text-white-light md:mr-3 text-3xl">-</button>
                <input
                  className="md:w-8 w-12 text-center bg-transparent text-white-light"
                  type="text"
                  value={qunaity}
                />
                <button onClick={()=>setQuanityt(qunaity+1)} className="text-white-light sm:mr-0 md:ml-3 text-3xl">+</button>
              </div>
              <div>
                <button className=" outline-none text-xl bg-white-light rounded-sm px-2 py-1 ml-10 bg-gradient-to-b from-gradFrom to-gradTo ">
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 sm:px-14 sm:my-10">
          <div className="flex justify-between items-center my-8">
            <div className="text-center">
              <p className="text-grey-default">Presale</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
                0.03 ETH
              </h1>
            </div>
            <div>
              <h1 className="grad sm:w-auto w-24 md:text-2xl pb-2 font-semibold pt-4">
                01 Jan 2022-07 Jan 2022
              </h1>
            </div>
          </div>
          <div className="flex justify-between my-3">
            <div className="text-center">
              <p className="text-grey-default">Mint Price</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
                0.05 ETH
              </h1>
            </div>
            <div className="text-center">
              <p className="text-grey-default">Public Sale</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
              08 Jan 2022
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
