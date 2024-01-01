"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DialogueProps {
  className?: string;
  label?: string;
  ListOne?: string;
  ListTwo?: string;
}

const Dialogue: React.FC<DialogueProps> = ({
  label,
  ListOne,
  ListTwo,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute w-[350px] sm:w-[400px] scale-0 max-[700px]:left-[25%] transition group-hover:scale-100 flex flex-col gap-3 z-50 p-8 rounded-md bg-[#333030]",
        className
      )}
    >
      <h3 className="text-[#9146FF] font-semibold">{label}</h3>
      <ul className="text-white space-y-4 pl-6 caret-white list-disc">
        <li>{ListOne}</li>
        <li>{ListTwo}</li>
      </ul>
      <h3 className="text-[#9146FF] font-semibold">Important :</h3>
      <ul className="text-white space-y-4 pl-6 caret-white list-disc">
        <li>Once an order has been made it cannot be cancelled.</li>
        <li>
          If for any reason we are not able to complete the order, we will issue
          a refund accordingly.
        </li>
      </ul>
    </div>
  );
};

export default Dialogue;
