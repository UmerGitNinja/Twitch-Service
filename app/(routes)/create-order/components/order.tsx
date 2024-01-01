"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import OrderMenu from "./order-menu";
import OrderDetail from "./order-detail";
import useOrderMenu from "@/hooks/useOrderMenu";

interface OrderProps {
  image: string;
  streamerName: string;
  StreamerId: string;
  isLive:string
}

const Order: React.FC<OrderProps> = ({ image, streamerName, StreamerId, isLive}) => {
  const {setIsLive, isLive: islive} = useOrderMenu()
  useEffect(()=> {
    setIsLive(isLive )
  },[isLive,setIsLive])
  return (
    <div className="flex items-center h-full bg-[#191D25] lg:flex-row flex-col">
      <div className="h-full w-full py-8 px-4 flex flex-col gap-8 flex-1 justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-32 h-32 lg:h-56 lg:w-56 shadow-md shadow-neutral-950 rounded-full">
            <Image
              alt="ArtistImage"
              className="rounded-full "
              src={image}
              fill
            />
            <Image
              alt="Spotify"
              className="absolute bottom-[0%] left-[5%] w-8 h-8 lg:w-12 lg:h-12"
              src={"/twitch.svg"}
              width={50}
              height={50}
            />
          </div>
          <h1 className="text-5xl font-thin">{streamerName}</h1>
        </div>
        { <OrderDetail StreamerName={streamerName}/> }
      </div>
      <OrderMenu StreamerName={streamerName}  StreamerId={StreamerId} />
    </div>
  );
};

export default Order;
