import { Button } from "@mui/material";
import WhyViewpal from "./WhyViewpal";

const data = [
  {
    icon: "/svg-gobbler-2.svg",
    heading: "Data Driven Growth",
    description:
      "We use data and analytics to refine and optimize our growth strategies continuously, ensuring the best results for your account.",
    background: "shadow-[0_2px_10px_5px_rgba(56,224,151,.4)]",
    border: "border-[#57E0A5] border-[3px]",
  },
  {
    icon: "/svg-gobbler-1.svg",
    heading: "Trusted by Over 24k Clients",
    description:
      "Trusted by thousands of clients around the world, our results speak for themselves. Join over 24k clients who've grown their TikTok using our services.",
    background: "shadow-[0_2px_10px_5px_rgba(164,13,188,.4)]",
    border: "border-[#a40dbc] border-[3px]",
  },
  {
    icon: "/svg-gobbler-0.svg",
    heading: "Dedicated Account Manager",
    description:
      "We realized that what’s rare in this industry is solid customer support ad we vowed to be different. Need help and support? We respond to all emails in 12 hours. Try it for yourself!",
    background: "shadow-[0_2px_10px_5px_rgba(21,85,249,.4)]",
    border: "border-[#1555f9] border-[3px]",
  },
];

const WhyViewpalComponent = () => {
  return (
    <section className="sm:p-16 px-4 w-full flex flex-col justify-center gap-20 items-center">
      <h1 className="text-white/75 font-[600] text-[40px] text-center">
        Why ViewPals?
      </h1>
      <div className="flex max-lg:flex-col flex-wrap justify-center items-center gap-20">
        {data.map((content) => (
          <WhyViewpal {...content} key={content.heading} />
        ))}
      </div>
      <a href="#" className="py-4 px-8 !rounded-full sm:px-16 sm:py-6 tracking-normal !text-white font-bold sm:text-xl bg-gradient-to-r from-[#4974E6] to-[#8D54E9]">
        Grow My Twitch
      </a>
    </section>
  );
};

export default WhyViewpalComponent;
