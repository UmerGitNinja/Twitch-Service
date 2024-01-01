import Image from "next/image";

interface SliderCardProps {
  imageUrl: string;
  name: string;
  review: string;
}
const SliderCard = ({ imageUrl, name, review }: SliderCardProps) => {
  return (
    <div className="flex flex-col gap-4 border border-purple-500 w-[420px] h-[245px] rounded-lg p-4 bg-[#202020] animate-slid max-md:w-[350px] max-md:h-[200px]">
      <div className="flex gap-4 items-center w-full ">
        <Image
          src={imageUrl}
          alt={name}
          width={70}
          height={70}
          className="rounded-full max-md:w-[40px] max-md:h-[40px]"
        />
        <div>
          <Image
            src="/Images/review-star.png"
            alt="stars"
            width={150}
            height={30}
            className="max-md:w-[90px] max-md:h-[20px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className=" font-semibold">
          {name}
          <span className="font-bold text-white "> review</span>
        </h3>
        <p className="text-sm text-neutral-300">{review}</p>
      </div>
    </div>
  );
};

export default SliderCard;
