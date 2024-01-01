import Image from "next/image";

interface GetStartedProps {
  heading: string;
  description: string;
  icon: string;
}
const GetStarted = ({
  heading,
  description,
  icon,
}: GetStartedProps) => {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-4 items-center p-8 bg-gray-100  rounded-md  h-auto ">
      <div className="p-3">
        <Image
          src={icon}
          alt="icon"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col gap-2 w-[80%] justify-between text-center md:text-left">
        <h2 className=" text-xl font-semibold text-neutral-800">{heading}</h2>
        <p className="text-gray-600 text-base font-medium">{description}</p>
      </div>
    </div>
  );
};

export default GetStarted;
