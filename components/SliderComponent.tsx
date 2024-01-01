import Image from "next/image";
import SliderCard from "./SliderCard";

const carddata = [
  {
    imageUrl: "/Images/1.png",
    name: "Mary Amundson",
    review:
      "Had some questions and customer support responded within a couple hours. The campaign I ordered was completed within 3 days...",
  },
  {
    imageUrl: "/Images/2.png",
    name: "Steve Broderick",
    review:
      "Viewpals is excellent to promote yourself on TikTok, YouTube. I have seen highly noticeable instant results in my stats...",
  },
  {
    imageUrl: "/Images/3.png",
    name: "Hector Sanders",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
  {
    imageUrl: "/Images/4.png",
    name: "Harvey D.Blessing",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
  {
    imageUrl: "/Images/5.png",
    name: "Park Jeimi",
    review:
      "Viewpals are very supportive and work to make all transactions quick and to the buyers requirement...",
  },
  {
    imageUrl: "/Images/1.png",
    name: "Mary Amundson",
    review:
      "Had some questions and customer support responded within a couple hours. The campaign I ordered was completed within 3 days...",
  },

  {
    imageUrl: "/Images/2.png",
    name: "Steve Broderick",
    review:
      "Viewpals is excellent to promote yourself on TikTok, YouTube. I have seen highly noticeable instant results in my stats...",
  },
  {
    imageUrl: "/Images/3.png",
    name: "Hector Sanders",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
];

const SliderComponent = () => {
  return (
    <section className="p-8 flex flex-col gap-4 md:gap-10">
      <div className="text-center flex flex-col gap-8">
        <h1 className="text-2xl md:text-[50px] font-bold text-gray-200">
          Our Client Get Ral Result
        </h1>
        <p className="text-white/75">
          We helped thousands of creator to exponentially grow their followers
          and engagement to make their videos go viral
        </p>
      </div>
      <div className="flex gap-2 text-xl font-bold justify-center items-center max-md:text-sm">
        Excellent
        <Image src="/Images/review-star.png" alt="stars" width={150} height={30} className="max-md:w-[100px] h-auto"/>
        4.4 out of 5
      </div>
      <div className="grid grid-cols-4 gap-x-[450px] h-[550px] overflow-hidden max-md:gap-x-[400px] ">
        {carddata.map((data, index) => (
          <div key={index} className="">
            <SliderCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
