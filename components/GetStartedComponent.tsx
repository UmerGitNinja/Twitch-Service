import Image from "next/image";
import GetStarted from "./GetStarted";

const Getstarted = [
  {
    heading: "Select A Package",
    description:
      "Pick the growth that fits your ambitions best. Our customizable order process is unique in the industry and allows you to specifically define your campaign objectives.",
    icon: "/Images/twitch-step-1.png",
  },
  {
    heading: "We Grab Their Attention",
    description:
      "With your campaign details in hand, we go to work. Using our advanced algorithm and massive community, we engage our followers and audiences to take action on your account. It's a win win for you and them, because we promote their account in return for engaging with yours.",
    icon: "/Images/twitch-step-2.png",
  },
  {
    heading: "Watch Your Growth",
    description:
      "As our community works its magic, you'll see your account rise in popularity. Witness engagement and follower count soar as your influence expands with Viewpals.",
    icon: "/Images/twitch-step-3.png",
  },
];
const GetStartedComponent = () => {
  return (
    <section className="flex flex-col gap-8 py-16 justify-center items-center ">
      <h1 className="text-white/75 text-[50px] text-center font-[600]">
        Get Started in 3 Steps
      </h1>
      <div className="flex flex-col lg:flex-row gap-20 justify-between items-center md:px-16 lg:px-32 w-full">
        <div className="flex flex-col flex-1 gap-4 max-w-[700px]">
          {Getstarted.map((item) => (
            <GetStarted {...item} key={item.heading} />
          ))}
        </div>
        <div className="lg:h-[597px] h-[200px] md:h-[350px] w-full lg:flex-1 relative">
          <Image
            src={"/Images/getstarted.png"}
            fill
            alt="getstarted"
            className="drop-shadow-[2px_2px_2px_rgba(213,69,131,0.9)]  object-contain"
          />
        </div>
      </div>
      <a
        href="#"
        className="py-4 px-8 mt-16 !rounded-full sm:px-16 sm:py-6 tracking-normal !text-white font-bold sm:text-xl  bg-gradient-to-r from-[#4974E6] to-[#8D54E9] "
      >
        Grow My Twitch
      </a>
    </section>
  );
};

export default GetStartedComponent;
