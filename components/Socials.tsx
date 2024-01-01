import Image from "next/image";
import Link from "next/link";

interface SocialsProps {
  name: string;
  link: string;
  icon: string;
  textColor?: string;
  borderColor?: string;
  DropShadow?: string;
}

const Socials = ({
  name,
  link,
  icon,
  textColor,
  borderColor,
  DropShadow,
}: SocialsProps) => {
  return (
    <div
      className={` flex flex-col justify-center items-center py-8 px-10 max-lg:py-4 max-lg:px-6 rounded-lg border ${borderColor} lg:gap-5 bg-[#202020] lg:max-w-[250px] max-w-[150px] lg:items-center `} 
    >
      <Link href={link} className="">
        <Image
          src={icon}
          alt={name}
          width={50}
          height={50}
          className={`"lg:w-[70px] lg:h-auto  bg-transparent ${DropShadow}`}
        />
      </Link>
      <h3 className={`mt-2   ${textColor} font-[400] text-center lg:text-2xl`}>
        {name}
      </h3>
    </div>
  );
};

export default Socials;
