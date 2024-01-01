import Image from "next/image";
interface Props {
  icon: string;
  heading: string;
  description: string;
  background?: string;
  border?: string;
}
const WhyViewpal = ({
  icon,
  heading,
  description,
  background,
  border,
}: Props) => {
  return (
    <div className="relative flex flex-col ">
      <div
        className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2  ${background} ${border} p-4 rounded-full`}
      >
        <Image src={icon} alt="card" width={48} height={48} />
      </div>

      <Image src={"/card.svg"} alt="card" width={350} height={250} />

      <div className="absolute top-[35%] left-2 flex flex-col gap-2 text-center max-w-[325px]">
        <h2 className="text-[20px] font-medium text-neutral-800">{heading}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default WhyViewpal;
