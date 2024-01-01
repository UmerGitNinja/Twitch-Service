import Image from "next/image";
import ClientResult from "./ClientResult";
import { Button } from "@mui/material";
import Link from "next/link";

const clientResultData = [
  { value: "108.2k", lable: "Compaigns Sold" },
  { value: "27.6M", lable: "Millons Followers" },
  { value: "24.5k", lable: "Viral Videos" },
];

const ClientResultComponent = () => {
  return (
    <section className="flex relative justify-center lg:justify-end lg:px-32 md:items-center md:bg-[url('/Images/clientresult.png')] bg-[url('/Images/clientresult2.png')] h-[550px] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-8 items-center md:gap-16 p-4 max-w-[900px]">
        <h1 className="md:text-[60px] text-2xl font-bold text-white/75 text-center">
          Our Client get result
        </h1>

        <p className="md:text-[20px] text-sm text-center text-gray-400">
          We work with creators that are looking to exponentially grow the
          followers and engagement on their accounts and improve their chances
          of their videos going viral.
        </p>

        <div className="flex text-center justify-between gap-8 items-center w-full ">
          {clientResultData.map((data,index) => (
            <ClientResult {...data} key={index}/>
          ))}
        </div>
        <Link href={"/"} className="py-2 px-4 max-w-[350px] hidden md:flex !rounded-full sm:px-16 sm:py-6 tracking-normal  !text-white font-bold text-xl bg-gradient-to-r from-[#4974E6] to-[#8D54E9] ">
          Grow My Twitch
        </Link>
      </div>
    </section>
  );
};

export default ClientResultComponent;
