"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

interface Props {
  qes: string;
  ans: string | React.ReactNode;
}

export default function DropDown({ qes, ans }: Props) {
  const [expanded, setExpanded] = useState(false);


  return (
    <div className="mb-8">
      <Accordion
        expanded={expanded}
        className={`${
          expanded
            ? "bg-gradient-to-r from-[#4974E6] to-[#8D54E9] text-white"
            : "bg-[#202020]"
        } transition-colors duration-500 ease-in-out lg:py-5 !rounded-xl text-white`}
        onClick={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          expandIcon={
           expanded ? <Image alt="dropdown" src="/icon_desktop_close_twitch.svg" width={32} height={32}/> :
           <Image alt="dropdown" src="/open faq.svg" width={32} height={32}/>  
          }
          className="!py-0"
          sx={{
            "& .MuiAccordionSummary-content": {
              padding: 0
            }
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="md:text-2xl text-1xl font-medium">{qes}</Typography>
        </AccordionSummary>
        <AccordionDetails className="!pt-0">
          <Typography className="md:!text-lg !text-base !font-sans">{ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
