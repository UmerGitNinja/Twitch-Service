import React from "react";
import Videoslider from "./Videoslider";

export const VideoComponent = () => {
  return (
    <section className="p-4 text-center space-y-3 mt-10">
      <h1 className=" font-bold text-xl md:text-3xl text-white">
        Over 24k+ Creators use Viewpals
      </h1>
      <p className="text-white/75">
        We&apos;re proudly recommended by creators around the globe. See what they
        have to say about us below.
      </p>
      <Videoslider />
    </section>
  );
};
