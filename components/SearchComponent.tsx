"use client";
import Image from "next/image";
import SearchBar from "./search-bar";

const SearchComponent = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center gap-2 text-center bg-gray-900 rounded-2xl px-2 py-[3%] max-md:gap-0 ">
        <h1 className="relative z-10 text-2xl font-bold text-white md:text-5xl">
          Get Started Today?{" "}
          <Image
            src={"/Images/line.png"}
            alt="color line"
            width={130}
            height={10}
            className="absolute z-[-1] object-none md:bottom-[-4px] md:right-[-25px]  w-[250px]  bottom-1 right-4"
          />
        </h1>

        <p className="text-white text-2xl py-10 px-[19%] max-md:text-base">
          Get started with us today to grow your followers and engagement. Join
          the ranks of over 24,000+ satisfied clients who are leveraging the
          power of Viewpals for their growth.
        </p>
        <div className="lg:w-[700px] sm:w-[200px] md:w-[500px]">
          <SearchBar />
        </div>
        <div className="flex justify-center items-center mt-10">
          <Image
            src={"/Search-Section.svg"}
            alt="color line"
            width={18}
            height={18}
            className="bg-white rounded-full w-10 h-10 p-2 mr-2"
          />
          <p className="text-white text-md max-md:text-sm ">
            Trusted by 24,000+ Influencers and Brands for Twitch Follower
            Growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;
