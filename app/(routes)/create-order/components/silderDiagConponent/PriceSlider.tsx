"use client"

import Slider from '@mui/material/Slider';
import { useEffect } from "react";

interface PriceSliderProps {
  setValue: (value: number) => void;
  ValueArray: any;
  disabled: boolean;
}
const PriceSlider: React.FC<PriceSliderProps> = ({
  setValue,
  ValueArray,
  disabled,
}) => {
  useEffect(()=> {
    console.log("Slider",disabled)
  })
  return (
    <Slider
      onChange={(e, value) =>
        setValue(typeof value === "number" ? ValueArray[value].value : 0)
      }
      valueLabelDisplay="off"
      marks
      disabled={disabled}
      min={0}
      step={1}
      max={ValueArray.length - 1}
      style={{
        width: 600,
      }}
      sx={{
        "& .MuiSlider-thumb": {
          borderRadius: "100%",
          width: "20px",
          height: "20px",
          color: "white",
          boxShadow: "0 4px 4px rgba(102,123,154,.25)",
          border: "2px solid purple",
        },
      }}
      className="text-[#9146FF] h-2 !rounded-sm max-w-full"
    />
  );
};

export default PriceSlider;
