import React from "react";
import { useTimer } from "react-timer-hook";
import Image from "next/image";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="mb-7 ">
      <div className="flex overflow-x-auto justify-start md:px-5 py-6">
        <div className=" relative mx-5 flex">
          <Image src="/images/timer-bg.png" alt="" width={80} height={80} />
          <span className=" font-primary middle font-bold text-lg md:text-5xl">
            {/* {days} */}
            11
          </span>
        </div>
        <div className=" relative mx-5 flex">
          <Image src="/images/timer-bg.png" alt="" width={80} height={80} />
          <span className="font-primary middle font-bold text-lg md:text-5xl">
            {/* {hours} */}
            23
          </span>
        </div>
        <div className=" relative mx-5 flex">
          <Image src="/images/timer-bg.png" alt="" width={80} height={80} />
          <span className="font-primary middle font-bold text-lg md:text-5xl">
            {/* {minutes} */}
            59
          </span>
        </div>
        <div className=" relative mx-5 flex">
          <Image src="/images/timer-bg.png" alt="" width={80} height={80} />
          <span className="font-primary middle font-bold text-lg md:text-5xl">
            {/* {seconds} */}
            40
          </span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
