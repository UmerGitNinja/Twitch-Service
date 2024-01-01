import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
interface SongsListProps {
  Url:string;
  title:string;
  onCheckBoxChange: (label: string, isChecked: boolean) => void;
}

const VideosList: React.FC<SongsListProps> = ({onCheckBoxChange,Url,title}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheckBoxChange(title, isChecked);
  };

  return (
    <div className="relative h-40">
      <Image src={Url} alt={"Video thumbnail"} fill className="object-cover"/>

    <Checkbox
      sx={{
        color: "#9146FF",
        borderRadius: "50%",
        "&.Mui-checked": {
          color: "#9146FF",
          borderRadius: "50%",
        },
      }}
      id="Song-Check"
      icon={<FaRegCircle size={20} />}
      checkedIcon={<FaCircleCheck size={20} />}
      className="text-[#9146FF] absolute top-[5%] right-1"
      onChange={handleCheckboxChange}
    />
    </div>
  );
};

export default VideosList;
