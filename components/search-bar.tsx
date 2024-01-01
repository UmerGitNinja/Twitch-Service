import Image from "next/image";
import React, { useState } from "react";
import SearchMenu from "./search-menu";

const SearchBar = () => {
  const [Query, setQuery] = useState("")
  return (
    <div className="flex relative z-50 rounded-full p-2 w-full bg-white items-center">
      <div className="relative z-50 flex-[0.5] w-8 h-8">
        <Image alt="Spotify-icon" src={"/twitch-icon.svg"} fill />
      </div>
      <div className="flex-[2.5] h-8 border-l-[1px] border-neutral-300">
        <input
          type="text"
          className="h-full outline-none placeholder:font-light text-lg md:text-1xl lg:text-2xl text-black px-2 placeholder:text-neutral-500 placeholder:text-sm lg:placeholder:text-xl sm:placeholder:text-base w-full"
          name="Query"
          placeholder="Enter Twitch username here..."
          onChange={(e)=> setQuery(e.target.value)}
          value={Query}
        />
      </div>

      <button
        type="submit"
        className="px-4 sm:text-xl text-sm sm:font-semibold font-medium whitespace-nowrap rounded-full py-2 sm:py-6 flex-1 sm:flex-[1.5] bg-gradient-to-r from-[#4974E6] to-[#8D54E9]"
      >
        Start Promotion
      </button>
      <SearchMenu Query={Query}/>
    </div>
  );
};

export default SearchBar;
