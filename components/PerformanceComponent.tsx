/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const PerformanceComponent = () => {
  return (
    <section className="border-2 bg-[#202020] rounded-xl  border-teal-500 w-full my-16 h-full overflow-hidden justify-center flex flex-col md:flex-row relative">
      <div className="bg-[#f7e9f2] py-16 px-4 md:px-16 lg:px-32 2xl:px-60 items-center basis-[75%] w-full lg:items-start justify-center flex flex-col lg:text-left text-center gap-8">
        <h2 className="xl:text-6xl lg:text-5xl text-3xl sm:text-2xl font-bold w-fit text-neutral-900">
          100% Performance Guarantee
        </h2>

        <p className="lg:text-lg md:text-md text-neutral-600">
          Drawing from our experience with thousands of campaigns, we recognize
          that outcomes may sometimes deviate from expectations. Should we fall
          short of delivering the promised results, irrespective of the
          circumstances, we pledge to refund you for any unfulfilled services.
          Trust that you'll always receive what you've ordered. For any
          inquiries or concerns, kindly contact us at support@viewpals.co, and
          we'll respond within 24 hours.
        </p>
        <Link href={"/"} className="py-2 px-4 max-w-[350px] hidden md:flex !rounded-full sm:px-16 sm:py-6 tracking-normal  !text-white font-bold text-xl bg-gradient-to-r from-[#4974E6] to-[#8D54E9]">
          Grow My Twitch
        </Link>
      </div>

      <div className="absolute h-32 w-32 right-0 top-0 -translate-y-[9%]">
        <Image src={"/triangle1.svg"} alt="triangle" fill />
      </div>
      <div className="relative w-full xl:basis-[25%] pt-16 flex justify-center">
      <div className="bg-white w-fit top-0 md:top-auto -translate-y-[50%] md:left-0 md:-translate-x-[50%] md:translate-y-0 z-50 p-4 rounded-full absolute shadow-md shadow-green-500">
        <Image src={"/svg-gobbler-2.svg"} alt="svg" width={52} height={42} />
      </div>
      <div className="lg:absolute self-end relative right-0 bottom-0 z-40 h-[293px] w-[302px] md:h-[378px] md:w-[390px] lg:h-[426px] lg:w-[438px]">
        <Image
          src={"/Images/guarantee-twitch.png"}
          alt="performance"
          fill
          className="object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default PerformanceComponent;
