"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { set } from "lodash";

const slides = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
];



interface Props {
  index: number;
  Videos: HTMLVideoElement;
}

const PlayVideo = [false, false, false, false, false];

export default function Videoslider() {
  const [play, setPlay] = useState<Props>();

  const handleVideoClick = (e: any, index: number) => {
    if (play === undefined) {
      PlayVideo[index] = true;
      e.currentTarget.play();
      setPlay({
        index: index,
        Videos: e.currentTarget as HTMLVideoElement,
      });
    } else if (play?.Videos !== e.currentTarget) {
      play.Videos.currentTime = 0;
      play?.Videos?.pause();
      e.currentTarget.play();
      PlayVideo[index] = true;
      setPlay({
        index: index,
        Videos: e.currentTarget as HTMLVideoElement,
      });
    } else if (play?.Videos === e.currentTarget) {
      if (PlayVideo[index] === false) {
        e.currentTarget.play();
        PlayVideo[index] = true;
      } else {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        PlayVideo[index] = false;
      }
    }

    console.log(e.currentTarget);
  };
  return (
    <>
      <Swiper
        loop={true}
        keyboard={true}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,

          renderBullet: (index, className) => {
            return `<span class="${className}" style="width: 8px; height: 8px; background: #db447e; justify-content:center;"></span>`;
          },
        }}
        modules={[Pagination]}
        className="bg-opacity-10 !h-[650px] rounded-lg bg-[#202020] !p-4 max-md:!h-[350px] max-md:overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide}
            className="rounded-xl drop-shadow-[2px_2px_2px_rgba(141,84,233,.5)] max-md:!w-[150px]  max-md:!h-[150px] "
          >
            <video
              data-
              className={`rounded-xl object-cover md:!h-[30.736vw] !w-[300px] `}
              src={slide}
              controls={false}
              autoPlay={false}
              muted={false}
              onClick={(e) => handleVideoClick(e, index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
