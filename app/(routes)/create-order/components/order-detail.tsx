import { Typography } from "@mui/material";
import Badge from "@mui/material-next/Badge";
import React from "react";
import FindIndex from "@/actions/find-index-price";
import {
  LiveViewersCustomMarks,
  FollowerCustomMarks,
  HourViewDurationCustomMarks,
  ViewsCustomMarks
} from "@/lib/custom-marks";
import {
  LiveStreamViewersPrices,
  FollowerPrices,
  //HourViewDurationPrices,
  ViewsPrices
} from "@/lib/Prices";
import useOrderMenu from "@/hooks/useOrderMenu";
import limitDecimalPlaces from "@/actions/limit-number-decimal";

interface OrderDetailProps {
  StreamerName: string;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ StreamerName }) => {
  const { videosCount, LiveValue, FollowerValue, HourViewValue, ViewsValue } =
    useOrderMenu();
  const LivePrice = FindIndex(LiveViewersCustomMarks, LiveValue);
  const FollowerPrice = FindIndex(FollowerCustomMarks, FollowerValue);
  const HourViewPrice = FindIndex(
    HourViewDurationCustomMarks,
    HourViewValue
  );
  const ViewsPrice = FindIndex(ViewsCustomMarks, ViewsValue);
  const Total =
    ViewsPrices[ViewsPrice] * (videosCount - 1) +
    FollowerPrices[FollowerPrice] +
    LiveStreamViewersPrices[LivePrice] * HourViewValue;
  
  return (
    <div className=" flex flex-col bg-[#202020] rounded-lg w-full max-w-[500px]">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center gap-4">
          <Badge
            color="success"
            sx={{
              "& .MuiBadge-badge": {
                background: "#9146FF",
                width: 20,
                height: 20,
              },
            }}
            size="large"
            overlap="circular"
            //badgeContent={PlayValue > 0 || SaveValue > 0 ? songsCount - 1 : 0}
          />
          <div className="flex flex-wrap items-start gap-2">
            <Typography className="font-semibold text-center font-sans text-[#9146FF]">
              {StreamerName}
            </Typography>
            <div className="py-1 px-3 font-medium block md:hidden text-[#9146FF] w-fit text-xs text-center border border-[#9146FF] rounded-full">
              Selected
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-neutral-500 text-sm">Order Detail</span>
        <h2 className="font-semibold text-xl text-white">
            ${limitDecimalPlaces(Total, 2)}
          </h2>
        </div>
      </div>
      <div className="flex flex-col px-8 pb-8 border-t-[1px] border-[#9146FF]">
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{LiveValue} Live Views</span>
            {(videosCount > 1 && LiveValue > 0) && (
              <div className="py-1 px-3 font-medium block text-[#9146FF] w-fit text-xs text-center border border-[#9146FF] rounded-full">
                {videosCount - 1} X {LiveValue} Live Views
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(LiveStreamViewersPrices[LivePrice], 2)}
          </strong>
        </div>
        <div>
      {LiveValue > 0 && (
        <div className="flex items-center justify-between text-white pt-4">
          <span className="font-light">{HourViewValue} Hours</span>
        </div>
      )}
    </div>
        <div className="flex items-center justify-between text-white pt-4">
          <span className="font-light">{FollowerValue} Followers</span>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(FollowerPrices[FollowerPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{ViewsValue} Views</span>
            {(videosCount > 1 && ViewsValue > 0) &&(
              <div className="py-1 px-3 font-medium block text-[#9146FF] w-fit text-xs text-center border border-[#9146FF] rounded-full">
                {videosCount - 1} X {ViewsValue} Views
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(ViewsPrices[ViewsPrice], 2)}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
