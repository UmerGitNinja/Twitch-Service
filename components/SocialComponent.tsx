import Socials from "@/components/Socials";

const links = [
  {
    name: "X",
    link: "/",
    icon: "/x.svg",
    textColor: "text-gray-400",
    borderColor: "border-gray-400",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(255,255,255,0.9)]",
  },
  {
    name: "Spotify",
    link: "/",
    icon: "/svg-image-3.svg",
    textColor: "text-green-500",
    borderColor: "border-green-400",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(0,255,0,0.9)]",
  },
  {
    name: "YouTube",
    link: "/",
    icon: "/youtube.svg",
    textColor: "text-[#F61C0D]",
    borderColor: "border-[#F61C0D]",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(246,28,13,0.9)]",
  },
  {
    name: "Tik Tok",
    link: "/",
    icon: "/tiktok.svg",
    textColor: "text-[#EE1D52]",
    borderColor: "border-[#38d5e0]",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(238,29,82,0.9)]",
  },
  {
    name: "Twitch",
    link: "/",
    icon: "/twitch.svg",
    textColor: "text-[#910FFF]",
    borderColor: "border-[#910fff]",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(135,57,204,0.9)]",
  },
  {
    name: "Instagram",
    link: "/",
    icon: "/insta.svg",
    textColor: "text-[#ee2a7b]",
    borderColor: "border-[#ee2a7b]",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(133,33,175,0.9)]",
  },
  {
    name: "Threads",
    link: "/",
    icon: "/threads.svg",
    textColor: "text-[#ee2a7b]",
    borderColor: "border-[#ee2a7b]",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(133,33,175,0.9)]",
  },
  {
    name: "Pinterest",
    link: "/",
    icon: "/printerest.svg",
    textColor: "text-red-500",
    borderColor: "border-red-400",
    DropShadow: "drop-shadow-[2px_2px_2px_rgba(201,31,39,0.9)]",
  },
];
const SocialComponent = () => {
  return (
    <section className="flex flex-col  justify-center  items-center gap-8 px-4 py-10 ">
      <h1 className="text-4xl font-bold max-lg:text-[40px] text-white/75 text-[50px] text-center ">
        <span className="bg-gradient-to-r from-[#4974E6] to-[#8D54E9]  bg-clip-text text-transparent ">
          ViewPal&apos;s
        </span>{" "}
        has more to offer!
      </h1>
      <div className=" w-full flex justify-center items-center mt-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-8 lg:gap-5  py-4 lg:w-[1200px] lg:pl-[2%] sm:w-[560px]">
          {links.map((link) => (
            <Socials {...link} key={link.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialComponent;
