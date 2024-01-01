import React from "react";
import { Footer } from "@/types";
import Link from "next/link";
import Image from "next/image";

const FooterData: Footer = {
  Links: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of use", href: "/" },
    { label: "FAQ", href: "/" },
  ],
  Cards: [
    "/Images/visa.png",
    "/Images/mastercard.png",
    "/Images/american-express.png",
    "/Images/jcb.png",
    "/Images/stripe.png",
    "/Images/discover.png",
    "/Images/apple-pay.png",
    "/Images/gg-pay.png",
  ],
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#202020]">
      <div className="w-full flex flex-col md:px-8 px-4 lg:px-36">
        <div className="flex justify-center items-center gap-4 pt-8">
          {FooterData.Links.map((link, index) => (
            <Link
              key={index}
              className="lg:text-lg md:text-base text-sm"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap flex-1 gap-8 justify-center h-40 border-b-[1px] py-12 border-purple-500">
          {FooterData.Cards.map((card: string, index) => (
            <div key={index} className="relative h-[40px] w-[65px]">
              <Image
                alt=""
                src={card}
                fill
                className="object-contain grayscale rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 md:px-16 px-8 lg:px-80 text-center">
        <p className="md:text-base text-xs font-light">
          © 2023{" "}
          <Link href={"/"} className="text-purple-500">
            Viewpals.co.
          </Link>{" "}
          All rights reserved. We are not endorsed or certified by any of the
          social media platforms referenced on this site. All logos and
          trademarks displayed are the property of their respective owners.
          Images shown are purely illustrative and do not indicate partnerships
          or affiliations. Use of our website constitutes acceptance of our{" "}
          <Link href={"/"} className="text-purple-500">
            terms of use
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
