"use client";

import OrderList from "./order-list";
import { useState } from "react";
import _ from "lodash";
import useOrderMenu from "@/hooks/useOrderMenu";

interface OrderMenuProps {
  StreamerId: string;
  StreamerName: string;
  disable?: boolean;
}
const OrderMenu: React.FC<OrderMenuProps> = ({ StreamerId, StreamerName }) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event?: React.SyntheticEvent, isExpanded?: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleButtonClick = (panel: string) => {
    setExpanded((prevExpandedPanel) =>
      prevExpandedPanel === panel ? false : panel
    );
  };

  const { videosCount, LiveValue, HourViewValue, FollowerValue, ViewsValue } =
    useOrderMenu();
  return (
    <div className="flex-1 pt-8 min-h-[91.6vh] max-w-full">
      <div className="md:px-32 px-4 flex flex-col gap-4">
        <OrderList
          ListTwo
          defaultExpanded={true}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          onButtonClick={handleButtonClick}
        />
        <OrderList
          ListThree
          StreamerId={StreamerId}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          onButtonClick={handleButtonClick}
          disable={ViewsValue < 100}
        />
        <OrderList
          ListFour
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          StreamerName={StreamerName}
          disable={
            (FollowerValue === 0 && LiveValue === 0 && HourViewValue === 1) ||
            (videosCount - 1 === 0 && ViewsValue > 0)
          }
        />
      </div>
    </div>
  );
};

export default OrderMenu;
